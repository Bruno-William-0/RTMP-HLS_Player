import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSPlayerProps {
  src: string; // URL do stream HLS (arquivo .m3u8)
  width?: string; // Largura do player (default: 100%)
  height?: string; // Altura do player (default: auto)
}

const HLSPlayer: React.FC<HLSPlayerProps> = ({ src, width = "100%", height = "auto" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Referência para o elemento <video>

  useEffect(() => {
    if (Hls.isSupported()) {
    //Aqui após verificar se o HLS é suportado, ele carrega o player com o URL da transmissão
      const hls = new Hls();
      hls.loadSource(src);
      if (videoRef.current) {
        hls.attachMedia(videoRef.current);
      }

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("HLS manifest carregado.");
        videoRef.current?.play().catch((err) => console.error("Erro ao reproduzir vídeo:", err));
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current?.canPlayType("application/vnd.apple.mpegurl")) {
        //Aqui serve para reproduzir em navegadores com suporte nativo ao HLS
      if (videoRef.current) {
        videoRef.current.src = src;
        videoRef.current.addEventListener("loadedmetadata", () => {
          videoRef.current?.play().catch((err) => console.error("Erro ao reproduzir vídeo:", err));
        });
      }
    } else {
      console.error("HLS não é suportado neste navegador.");
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      style={{ width, height }}
      autoPlay
      muted
    />
  );
};

export default HLSPlayer;
