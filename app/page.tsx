import Link from "next/link"

const Page = () => {
    return (
      <section className="home">
        <h1 className="home__logo">APC</h1>
        <p className="home__title">algoritm, pattern, struct</p>
        <p className="home__about">
        Данный справочник содержит определения и схемы данных, api</p>
        <Link href={''}><div className="home__info">подробнее</div></Link>
      </section>
    )
}

export default Page