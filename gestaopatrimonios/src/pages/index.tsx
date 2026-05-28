import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(){
  return{
    redirect: { //Redirecionamento ao abrir o sistema
      destination: "/login", // Para a tela login
      permanent: false, // Não redirecionar sempre para a tela home mesmo com outras URLs
    },
  };
}

export default function Index(){
  return null;
}