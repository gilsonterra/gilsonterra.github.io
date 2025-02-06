import BackButton from "@/app/components/BackButton/BackButton";
import { getSlugs } from "@/app/utils/content";

type PostProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSlugs();
}

const NotePage: React.FC<PostProps> = async ({ params }) => {
  const slug = (await params).slug;
  const { default: Note } = await import(`@/app/content/${slug}.mdx`);

  return (
    <div>
      <BackButton text="voltar" />
      <Note />
    </div>
  );
};

export default NotePage;
