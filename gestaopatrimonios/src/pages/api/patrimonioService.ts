import { api } from "./api"; 

export async function listarPatrimonio(){
    try{
        const response = await api.get("Patrimonio");

        return response.data;
    }
    catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function importarPatrimonioCsv(arquivo: File){
    try{
        const formData = new FormData(); // Pega os valores e transforma em json -- "nome" : "banana"  // "arquivoCsv" : "arquivo"

        formData.append("arquivoCsv", arquivo)

        await api.post("Patrimonio/importar-csv", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
    catch(error: any) {
        throw new Error(error.response?.data);
    }
}