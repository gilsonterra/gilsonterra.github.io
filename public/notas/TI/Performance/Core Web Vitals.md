# Core Web Vitals
Indices analisados pelo Google que afetam o rankeamento do site

## LCP - Largest Contentful Paint *(loading)*
Mede a performance de carregamento. Para prover uma boa experiência do usuário LCP deve ocorrer em até **2.5 segundos** de quando a página iniciou o carregamento. Tempo para o maior conteûdo da página finalizar de carregar - 'Carregando ou quase pronto'. 
https://web.dev/optimize-lcp/
- CDN's próximos ao usuário
- Técnicas de cache
- Services Workers 
- Gzip
- Usar técnicas de async, lazyloading de scripts js
- Utilizar CDNs para imagens
- Utilizar preconnect, dsn-prefetch, preload para fontes, css, js
- Minificar css, js, images
- Inline critical CSS
- Defer non-critical CSS
- Comprimir image

#### Outras métricas da LCP

##### TTFB - Time to First Byte
Tempo que leva para o primeiro byte chegue no browser do usuário

##### FCP - First Contentful Paint
Tempo em que o primeiro conteúdo significativo foi renderizado - 'Acessei, vai carregar'
- Tamanho e localização adequados de servidor
- Otimizar compressão de arquivos e assets
	- https://tinypng.com (png e jpeg)
	- https://jakearchibald.github.io/svgomg (svg)

---

## FID - First Input Delay *(interactivity)*
Mede a interação do tempo de delay entre a primeira ação e execução do código da interação. O FID deve ocorrer em até **100 milesegundos** ou menos.
https://web.dev/optimize-fid/
- Quebre as execuções Js longas
- Server side render
- Cuidado com third-party (como analitics, intercom, sentry)
- Use web worker
- Use defer e async no tag <script />

#### Outras métricas do FID

##### TBT - Total Blocking Time
E usado quando não é possível medir a interação do usuário FID, então essa metrica é utilizada como uma alternativa. A Soma de períodos entre FCP e tempo de interação

##### TTI - Time to Interactive
Mede o tempo desde o início do carregamento da página até o carregamento de seus principais sub-recursos e é capaz de responder de forma confiável á entrada do usuário rapidamente

---

## CLS - Commulative Layout Shift *(visual stability)*
Mede a estabilidade visual. Calcula soma de movimento de elementos visíveis - 'Estabilidade Visual'. Páginas devem manter um CLS de até **0.1** ou menos
https://web.dev/optimize-cls/
- Usar tamanhos específicos de elementos 
-  Imagens com dimensões fixas
- Ads, embeds e iframes com tamanhos definidos
- Não quebra responsivo

# Ferramentas para verificar performance
- DevTools 
-  https://web.dev/measure
-  https://developers.google.com/speed/pagespeed/insights
-  https://support.google.com/webmasters/answer/9205520
- [New Relic](https://newrelic.com/)
- Crux Compare
- [webpagetest.org](http://webpagetest.org)
- [performancebudget.io](http://performancebudget.io)