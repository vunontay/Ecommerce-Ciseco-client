// useModal hook
import { useState } from "react";

const useModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const [id, setId] = useState<string>("");
    const [dataModal, setData] = useState<any | null>();

    const handleOpenModal = (id: string, dataModal: any) => {
        setData(dataModal);
        setId(id);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return { openModal, handleOpenModal, handleCloseModal, id, dataModal };
};

export default useModal;
