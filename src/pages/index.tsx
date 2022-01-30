import useSite from 'hooks/use-site';
import { getPaginatedPosts } from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import { FeaturedPost, PostCard } from 'components/Post';
import Pagination from 'components/Pagination';

import { IPost } from 'models/Post';

import styles from 'styles/pages/Home.module.scss';

interface IPageProps {
  posts: IPost[];
  pagination: any;
}
export default function Home({ posts, pagination }: IPageProps) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <Container>
          <div className="flex items-end">
            <h1
              className="font-bold md:float-left text-6xl"
              dangerouslySetInnerHTML={{
                __html: `${title}.`,
              }}
            />

            <p
              className="text-right font-semibold w-full"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
        </Container>
        <Container>
          <FeaturedPost post={posts[0]} />
        </Container>
      </Header>

      <Section>
        <Container>
          {/* <h2 className="">Posts</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-16 lg:gap-y-32 gap-x-20 md:gap-x-32 mb-32">
            {posts.map((post, index) => {
              return <PostCard key={index} post={post} />;
            })}
          </div>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, pagination }: { posts: IPost[]; pagination: any } = await getPaginatedPosts();
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
