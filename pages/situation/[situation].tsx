import { Choice, Situation, SituationChoice } from "@prisma/client";
import { useUser } from "@supabase/auth-helpers-react";
import { GetStaticPaths } from "next";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { prisma } from "../../lib/prisma";

export default function Index({
  situation,
}: {
  situation: Situation & { choice: (SituationChoice & { choice: Choice })[] };
}) {
  console.log(situation);
  const router = useRouter();
  const user = useUser();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);
  return (
    <div className="relative w-100  min-h-screen overflow-hidden">
      <div
        className=" w-screen min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/backGround.png)",
        }}
      >
        <div className=" w-screen min-h-screen flex flex-col justify-evenly items-center  border-t-black ">
          <img
            className="md:w-1/3 w-3/4 border-8 border-black border-solid"
            src={situation.image}
          />
          <div className=" md:w-2/5 w-4/5 py-5 px-4  bg-t min-h-40  rounded-xl">
            <h1 className=" text-white  text-center  font-bold  text-xl md:text-lg EnchantedLand  customT">
              {situation.story_text}
            </h1>
          </div>
          <div className="flex justify-center  align-center  flex-wrap  customC">
            {situation.choice.map((situations) => (
              <button
                key={situations.choice.id}
                type="button"
                className="  text-lg font-bold mx-1  customC"
                style={{
                  backgroundImage:
                    "url(https://tgokvvdetwamaeawjpwo.supabase.co/storage/v1/object/public/time-relic/button.png)",
                  backgroundSize: "100% 100%",
                }}
              >
                <Link href={`/situation/${situations.choiceId}`}>
                  {situations.choice.choice_text}
                </Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const situation = await prisma.situation.findMany();
  const paths = situation.map((situationChoice) => ({
    params: { situation: situationChoice.id.toString() },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async ({ params }: any) => {
  const id = params.situation;
  console.log(id);

  const situation = await prisma.situation.findFirst({
    where: { id: id! },
    include: { choice: { include: { choice: true } } },
  });
  console.log(situation);

  return {
    props: { situation: situation },
  };
};
