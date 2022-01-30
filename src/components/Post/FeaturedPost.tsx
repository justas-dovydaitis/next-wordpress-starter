import { formatDate } from 'lib/datetime';
import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import { authorPathByName } from 'lib/users';
import { IPost } from 'models/Post';
import Link from 'next/link';

interface IComponentProps {
  post: IPost;
}

const FeaturedPost = ({ post }: IComponentProps) => {
  return (
    <>
      <article>
        <figure className="mb-8 md:mb-16">
          <Link href="">
            <a>
              <img
                className="shadow-md hover:shadow-lg transition-shadow duration-200 w-full"
                src={post.featuredImage?.sourceUrl}
              />
            </a>
          </Link>
        </figure>
        <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
          <div>
            <Link href={postPathBySlug(post.slug)}>
              <a>
                <h3
                  className="mb-4 text-4xl lg:text-6xl leading-tight hover:underline"
                  dangerouslySetInnerHTML={{
                    __html: post.title,
                  }}
                />
              </a>
            </Link>
            {post.modified && (
              <div className="mb-4 md:mb-0 text-lg">
                <time dateTime={post.modified}>{formatDate(post.modified)}</time>
              </div>
            )}
          </div>
          <div>
            {post.excerpt && (
              <div
                className="text-lg leading-relaxed mb-4"
                dangerouslySetInnerHTML={{
                  __html: sanitizeExcerpt(post.excerpt),
                }}
              />
            )}
            <Link href={authorPathByName(post.author.name)}>
              <a className="flex items-center">
                <img src={post.author.avatar.url} className="w-12 h-12 rounded-full mr-4" alt={post.author.name} />
                <div className="text-xl font-bold">{post.author.name}</div>
              </a>
            </Link>
          </div>
        </div>
      </article>
      <hr />
    </>
  );
};

export default FeaturedPost;
