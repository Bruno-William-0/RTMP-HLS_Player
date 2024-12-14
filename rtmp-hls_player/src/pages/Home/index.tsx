import Header from "../../components/Header";
import Layout from "../../components/Layout";
import HLSPlayer from "../../components/Player"

export default function Home()
{
    return(
        <Layout>
            <Header></Header>
            <HLSPlayer src='http://localhost:80/hls/stream.m3u8'></HLSPlayer>
        </Layout>
    )
}