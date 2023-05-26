import axios from "axios";
import useSWR from "swr";


const fetcher = (url) => axios.get(url).then(result => result.data);    //all'interno del custom ci sono tutte le chiamate esportabili e usabili in altri componenti

const useGet = (url, id = 0) => {     //le chiama

    let finalUrl = url;
    if (id > 1) {
        finalUrl += ("/" + id);
    }

    const { data, error  } = useSWR(finalUrl, fetcher);

    return {
        data: data,
        error: error,
        isLoading: !error && !data,
        

    }

}

// FINE - UseGet

// INIZIO - UsePut -> Hook per modifica dati
const usePut = (url, id) => {

    const finalUrl = url + "/" + id;
    // usePut restituisce una funzione da restituire in fase di submit
    return (data, successFn) => {    // Data -> l'oggetto con i dati da salvare; successFn -> la funzione da eseguire nel then
        axios.put(finalUrl, data).then(result => {
            if (result.data) {
                successFn(); // Se il salvataggio va a buon fine il "then" eseguirà òa funzione successFn
            }
        });
    }
}

// Fine - UsePut

// INIZIO - usePost -Z Hook per creazione dati
const usePost = (url) => {
    return (data, successFn) => {
        axios.post(url, data).then(result => {
            if (result.data) {
                successFn();
            }
        })
    }

}

// fine - Usepost

// INIZIO - useDelete 

const useDelete = (url,id) => {
    const finalUrl = url + "/" + id;

    return (successFn) => {
            axios.delete(finalUrl).then(result => {
                if(result.data) {
                    successFn();
                }
            })
        }
    }

// FIne useDelete

export { useGet, usePut, usePost,useDelete, fetcher };