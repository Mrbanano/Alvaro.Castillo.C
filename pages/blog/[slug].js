import { MDXRemote } from "next-mdx-remote";
import { getFilesBySlug, getFiles } from "../../lib/mdx";
import Style from "./slug.module.css";

//Componets
import MDXComponents from "../../components/MDXComponents";
import { Container } from "../../components/BlogComponents/Container";

export default function Post({ source, frontmatter }) {
  return (
    <Container>
      <main className={Style.wrap}>
        <MDXRemote {...source} components={MDXComponents} />
      </main>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFilesBySlug(params.slug);
  return {
    props: { source, frontmatter },
  };
}

export async function getStaticPaths() {
  const post = await getFiles();
  const paths = post.map((post) => {
    return {
      params: {
        slug: post.replace(/\.mdx$/, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
