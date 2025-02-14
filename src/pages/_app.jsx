import NextApp from 'next/app';

import { SiteContext, useSiteContext } from 'hooks/use-site';
import { SearchProvider } from 'hooks/use-search';

import { getSiteMetadata } from 'lib/site';
import { getRecentPosts } from 'lib/posts';
import { getTopLevelPages } from 'lib/pages';
import { getCategories } from 'lib/categories';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { getAllMenus, createMenuFromPages, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import 'styles/globals.css';
import variables from 'styles/_variables.module.scss';

function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  return (
    <SiteContext.Provider value={site}>
      <ThemeProvider attribute="class" enableSystem={false}>
        <SearchProvider>
          <NextNProgress height={4} color={variables.progressbarColor} />
          <Component {...pageProps} />
        </SearchProvider>
      </ThemeProvider>
    </SiteContext.Provider>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { posts: recentPosts } = await getRecentPosts({
    count: 5,
  });

  const { categories } = await getCategories({
    count: 5,
  });

  const { menus } = await getAllMenus();

  const defaultNavigation = createMenuFromPages({
    locations: [MENU_LOCATION_NAVIGATION_DEFAULT],
    pages: await getTopLevelPages(),
  });

  menus.push(defaultNavigation);

  return {
    ...appProps,
    metadata: await getSiteMetadata(),
    recentPosts,
    categories,
    menus,
  };
};

export default App;
