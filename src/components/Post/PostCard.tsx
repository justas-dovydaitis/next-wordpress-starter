import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/posts';
import { formatDate } from 'lib/datetime';
import { authorPathByName } from 'lib/users';

import { FaThumbtack } from 'react-icons/fa';
import { IPost } from 'models/Post';

interface IComponentProps {
  post: IPost;
}

const PostCard = ({ post }: IComponentProps) => {
  return (
    <div>
      <div className="mb-5">
        <div className="-mx-5 sm:mx-0">
          <Link href={postPathBySlug(post.slug)}>
            <a aria-label={post.title}>
              <figure className="relative">
                {post.isSticky && (
                  <>
                    <span className="absolute top-0 left-0 w-0 h-0 border-r-transparent border-r-[5rem]  border-t-[5rem] border-t-white dark:border-t-zinc-800" />
                    <FaThumbtack aria-label="Pinned Post" size="1.5rem" className="absolute top-3 left-3 -rotate-45" />
                    <span className="absolute top-0  h-20 w-20 left-0 m-0 border-t-[1px] border-l-[1px] border-gray-200 dark:border-gray-600 ">
                      &nbsp;
                    </span>
                  </>
                )}
                <img
                  src={post.featuredImage?.sourceUrl}
                  className="shadow-sm hover:shadow-md transition-shadow duration-200"
                />
              </figure>
            </a>
          </Link>
        </div>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={postPathBySlug(post.slug)}>
          <a className="hover:underline" dangerouslySetInnerHTML={{ __html: post.title }} />
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <time dateTime={post.modified}>{formatDate(post.modified)}</time>
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: sanitizeExcerpt(post.excerpt) }}
      />
      <div className="flex items-center">
        <Link href={authorPathByName(post.author.name)}>
          <a className="flex items-center">
            <img src={post.author.avatar.url} className="w-12 h-12 rounded-full mr-4" alt={post.author.name} />
            <div className="text-xl font-bold">{post.author.name}</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
