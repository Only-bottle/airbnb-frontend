import { FaComment, FaGithub } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function SocialLogin() {
  let kakaoParams = {
    client_id: "33564d2c5ea25acf55caf57c7b334bf4",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const githubParams = {
    client_id: "c39ea00b6a5010f68c2b",
    scope: "read:user,user:email",
  };
  const naverParams = {
    response_type: "code",
    client_id: "5fupNMamPO8XKis_6OgX",
    redirect_uri: "http://127.0.0.1:3000/social/naver",
    state: "test"
  };
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?${new URLSearchParams(
    kakaoParams
  ).toString()}`;
  const githubUrl = `https://github.com/login/oauth/authorize?${new URLSearchParams(
    githubParams
  ).toString()}`;
  const naverUrl = `https://nid.naver.com/oauth2.0/authorize?${new URLSearchParams(
    naverParams
  ).toString()}`;
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button as="a" href={githubUrl} w="100%" leftIcon={<FaGithub />}>
          Continue with Github
        </Button>
        <Button
          as="a"
          href={kakaoUrl}
          w="100%"
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
        <Button
          as="a"
          href={naverUrl}
          w="100%"
          leftIcon={<SiNaver />}
          colorScheme={"green"}
        >
          Continue with Naver
        </Button>
      </VStack>
    </Box>
  );
}
