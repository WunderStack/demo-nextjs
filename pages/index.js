import Head from 'next/head'

export default function IndexPage({ isWunderPreview }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-silver-md">
        <main className="relative max-w-5xl mx-auto">
          <div className="flex flex-col min-h-screen lg:flex-row lg:items-center lg:p-8">
            <div className="flex flex-col flex-grow bg-white lg:shadow-2xl lg:rounded-lg lg:overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-accent-gradient"></div>
              <header className="flex-grow flex flex-col justify-center p-12">
                <div className="pl-0 grid md:grid-cols-3 text-center flex items-center space-y-8 md:space-y-0">
                  <div className="flex flex-col items-center space-y-8">
                    <img src="logo.svg" className="w-24 h-24" />
                    <h1 className="font-light text-2xl md:text-4xl text-accent">WunderPreview</h1>
                  </div>
                  <div className="self-end pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-10 w-10 mx-auto">
                      <g>
                        <path className="fill-current text-red"
                          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col items-center space-y-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 309" className="h-24">
                      <g>
                        <path className="fill-current text-accent"
                          d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z" />
                      </g>
                    </svg>
                    <h1 className="font-light text-2xl md:text-4xl text-accent">Next.js</h1>
                  </div>
                </div>
              </header>
              <section
                className="bg-primary py-10 px-12 text-white">
                <strong>SSR response:</strong> We're currently{' '}
                {isWunderPreview ? (
                  <>in WunderPreview. Env var <code className="border border-accent rounded-md p-2">IS_WUNDERPREVIEW</code> equals <code className="border border-accent rounded-md p-2">{isWunderPreview}</code></>
                ): (
                  <>not in WunderPreview. Env var <code className="border border-accent rounded-md p-2">IS_WUNDERPREVIEW</code> is not set.</>
                )}
              </section>
              <section
                className="border-t-2 border-silver-md flex-grow flex flex-col justify-center py-10 pt-6 px-12 space-y-4">
                <div className="pl-0">
                  <p className="text-slate-dk mt-1 text-sm md:text-base">
                    With <a href="https://wunderpreview.com" target="_blank" rel="nofollow"
                      className="underline">WunderPreview</a>, everyone on your dev team can independently preview code changes
                    at any time. Instantly. Simplified feedback loops lead to faster development and clearer communication.
                    Spend time creating value, not code previews.
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  <p className="text-slate-dk mt-1 text-sm md:text-base space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-3 w-3 inline">
                      <g>
                        <path className="fill-current text-gray"
                          d="M218.101 38.101L198.302 57.9c-4.686 4.686-4.686 12.284 0 16.971L353.432 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h341.432l-155.13 155.13c-4.686 4.686-4.686 12.284 0 16.971l19.799 19.799c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L235.071 38.101c-4.686-4.687-12.284-4.687-16.97 0z" />
                      </g>
                    </svg>
                    <a href="https://wunderpreview.com" target="_blank" rel="nofollow" className="underline">Learn more about
                      WunderPreview.</a>
                  </p>
                  <p className="text-slate-dk mt-1 text-sm md:text-base md:text-right space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="h-3 w-3 inline">
                      <g>
                        <path className="fill-current text-gray"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </g>
                    </svg>
                    <a href="https://github.com/WunderStack/demo-nextjs" target="_blank" rel="nofollow" className="underline">Fork this on
                      GitHub</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return { props: { isWunderPreview: process.env.IS_WUNDERPREVIEW || '' } }
}
