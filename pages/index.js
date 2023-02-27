import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Meta from "@/app/utils/Meta";
import CardItem from "@/app/cards/Carditem";

export default function Home({ cards }) {
  return (
    <div>
      <Meta title="Главная" description="Описание страницы" />

      <main className="w-1/4 m-auto mt-20">
        {cards.map((card) => (
          <CardItem key={card._id} card={card} />
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:3000/api/cards`);
  const cards = await response.json();

  return {
    props: {
      cards,
    },
    revalidate: 10,
  };
};
