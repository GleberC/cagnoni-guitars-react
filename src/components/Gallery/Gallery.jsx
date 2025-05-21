import React, { useState } from 'react';
import imagens from './data';
import ImageModal from './ImageModal'; // ajuste o caminho conforme a estrutura do seu projeto

function Gallery({ blocoId }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);


  const imagensFiltradas = imagens.filter(imagem => imagem.categoria === blocoId);


  const abrirModal = (imagem) => {
    setImagemSelecionada(imagem);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setImagemSelecionada(null);
  };
  
  return (
    <div className="gallery">
      {imagensFiltradas.map((imagem) => (
        <div className="image-container" key={imagem.id}>
          <img
            src={imagem.src}
            alt={imagem.alt}
            className="thumbnail"
            onClick={() => abrirModal(imagem)}
          />
          {/* Ocultamos a descrição aqui para ela só aparecer no modal */}
        </div>
      ))}

      {/* Modal */}
      <ImageModal
        isOpen={modalAberto}
        src={imagemSelecionada?.src}
        descricao={imagemSelecionada?.descricao}
        onClose={fecharModal}
      />
    </div>
  );
}

export default Gallery;

