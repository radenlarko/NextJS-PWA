import { HeaderBar } from "@/components";
import { Post } from "@/typing";
import { getPostDetails, getPostsId } from "@/utils/fetchApi";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { useQuery } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { BsMenuApp } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  dataDetails: Post;
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

const PostDetails: NextPage<Props> = ({ dataDetails }) => {
  const { data } = useQuery<Post>(
    ["get-posts-details", dataDetails.id],
    () => getPostDetails(String(dataDetails.id)),
    {
      initialData: dataDetails,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <>
      <Head>
        <title>{dataDetails.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          className={inter.className}
          bg={useColorModeValue("gray.50", "gray.800")}
          minH="100vh"
        >
          <Box maxW="7xl" mx="auto" p={{ base: 2, md: 10 }}>
            <HeaderBar navigate="/post/list" NavigateIcon={BsMenuApp} />
            <Box
              mt={4}
              p={6}
              bg={useColorModeValue("gray.100", "gray.700")}
              borderRadius="lg"
            >
              <Text fontWeight={500}>{data.title}</Text>
              <Text fontSize="sm" fontWeight="light">
                {data.body}
              </Text>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default PostDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getPostsId();

  const paths = response.map((item: number) => {
    return {
      params: {
        id: String(item),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as IParams;

  const dataDetails = await getPostDetails(id);

  return {
    props: {
      dataDetails,
    },
  };
};