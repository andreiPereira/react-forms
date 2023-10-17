import { useState } from "react";
import SearchAppBar from "../components/SearchAppBar";
import CustomPaginationActionsTable from "../components/TablePaginationActions";
import paises from "../mocks/paises";

const List = () => {

    const [busca, setBusca] = useState('')
    const colums = 'r.name'

    return (
        <>
            <h1>List</h1>
            <SearchAppBar value={busca} onChange={(caracter) => { setBusca(caracter) }} />
            <CustomPaginationActionsTable itens={paises} busca={busca} colums={colums}/>
        </>


    );

};

export default List;
