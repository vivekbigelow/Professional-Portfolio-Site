import styles from '../../styles/Home.module.css';
import HeadWrapper from "../../components/HeadWrapper";
import Link from 'next/link';
import Nav from "../../components/Nav";

export default function Collages() {
    return (
        <div className={styles.container}>
            <HeadWrapper />

            <main className={styles.main}>
                <Nav />
                <article className={styles.article}>
                <h1>Collages</h1>
                <p>In 2022 I created several digital collages made up of found images and images I shot. Some of the collages are loosely inspired by the xpiritualism aesthetic.
                </p>
                <div className={styles.imgGrid}>
                    <Link href="/img/work/collages/city-of-angels.jpg">
                        <img src="/img/work/collages/city-of-angels.jpg" width="100%" alt="City of Angels"/>
                    </Link>
                    <Link href="/img/work/collages/death&happiness.jpg">
                        <img src="/img/work/collages/death&happiness.jpg" width="100%" alt="Death and Happiness"/>
                    </Link>
                    <Link href="/img/work/collages/stluis.jpg">
                        <img src="/img/work/collages/stluis.jpg" width="100%" alt="St. Louis"/>
                    </Link>
                    <Link href="/img/work/collages/AnatomicalTherapeuticChemicalClassificationSystem.jpg">
                        <img src="/img/work/collages/AnatomicalTherapeuticChemicalClassificationSystem.jpg" width="100%" alt="Anatomical Therapeutic Chemical Classification System"/>
                    </Link>
                    <Link href="/img/work/collages/blind-bastard.jpg">
                        <img src="/img/work/collages/blind-bastard.jpg" width="100%" alt="Blind Bastard"/>
                    </Link>
                    <Link href="/img/work/collages/fallen-angels.jpg">
                        <img src="/img/work/collages/fallen-angels.jpg" width="100%" alt="Fallen Angels"/>
                    </Link>
                    <Link href="/img/work/collages/gleeming-godpsd.jpg">
                        <img src="/img/work/collages/gleeming-godpsd.jpg" width="100%" alt="Gleeming God"/>
                    </Link>
                    <Link href="/img/work/collages/glho-main-banner.jpg">
                        <img src="/img/work/collages/glho-main-banner.jpg" width="100%" alt="God Loved Here Once"/>
                    </Link>
                    <Link href="/img/work/collages/hello-calrity.jpg">
                        <img src="/img/work/collages/hello-calrity.jpg" width="100%" alt="Hello Clarity"/>
                    </Link>
                    <Link href="/img/work/collages/mainpowerdisconnectswitch.jpg">
                        <img src="/img/work/collages/mainpowerdisconnectswitch.jpg" width="100%" alt="Main Power Disconnect Switch"/>
                    </Link>
                    <Link href="/img/work/collages/mistaken-convenience.jpg">
                        <img src="/img/work/collages/mistaken-convenience.jpg" width="100%" alt="Mistaken Convenience"/>
                    </Link>
                    <Link href="/img/work/collages/ny.jpg">
                        <img src="/img/work/collages/ny.jpg" width="100%" alt="Big Apple"/>
                    </Link>
                    <Link href="/img/work/collages/self-portrait.jpg">
                        <img src="/img/work/collages/self-portrait.jpg" width="100%" alt="Narcissus"/>
                    </Link>
                </div>
                </article>
            </main>
        </div>
    )
}