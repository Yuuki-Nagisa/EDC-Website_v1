import {
    Intro,
    Activity,
    Mission,
    Membership,
    JoinUs,
} from "@components/about";

export default function AboutPage() {
    return (
        <main>
            <Intro />
            <Mission />
            <Activity />
            <Membership />
            <JoinUs />
        </main>
    );
}
