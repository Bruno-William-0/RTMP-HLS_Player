import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode; // Aceita qualquer número de children
}

export default function Layout({ children }: LayoutProps) {
  const [header, content] = React.Children.toArray(children); // Divide os children em seções (se necessário)

  return (
    <Grid
      className="grid"
      templateColumns="1fr 1fr 1fr 1fr 1fr"
      templateRows="auto auto auto"
      gap={3}
      minW={'200vh'}
    >
      {/* Header ou conteúdo principal */}
      <GridItem colSpan={5} rowSpan={1}>
        {header}
      </GridItem>

      {/* Conteúdo central (como o HLSPlayer) */}
      <GridItem colSpan={3} rowSpan={1} colStart={2} colEnd={5}>
        {content}
      </GridItem>

      {/* Espaço vazio */}
      <GridItem />
    </Grid>
  );
}
