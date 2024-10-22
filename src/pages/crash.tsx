import { modal } from "@/blockchain-provider";
import { GetServerSideProps } from "next";
import { useAppKitAccount } from "@reown/appkit/react";
import Head from "next/head";

interface Props {
  data: string;
}

export default function Crash({ data }: Props) {
  const { address } = useAppKitAccount();

  return (
    <>
      <Head>
        <title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </title>
      </Head>

      <div
        onClick={() => {
          modal.open();
        }}
      >
        test: {address}
        data: {data}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);

  return {
    props: {
      data: "1111",
    },
  };
};
