import {
  GlobalOutlined,
  HomeOutlined,
  MenuOutlined,
  SunOutlined,
  ThunderboltOutlined,
  WifiOutlined,
} from '@ant-design/icons';
import {
  Button,
  Drawer,
  FloatButton,
  Layout,
  Modal
} from 'antd';
import React, { useRef } from 'react';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalContent, setModalContent] = React.useState('');

  const videoRef = useRef(null);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);
  
  

  const showModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    // Para o vídeo ao fechar o modal
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reinicia o vídeo
      videoRef.current.load(); // Recarrega o vídeo
      
    }
    setModalVisible(false);
  };

  return (
    <>
      {/* Global styles */}
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          #root {
            height: 100%;
          }
        `}
      </style>
      <div
        style={{
          backgroundImage: `url(/background.jpg)`,
          backgroundSize: 'cover', // Cover the entire viewport
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Do not repeat the image
          minHeight: '100vh', // Ensure it covers the full viewport height
          display: 'flex', // Make this container a flexbox
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'space-between', // Push footer to the bottom
        }}
      >
        <Layout
          style={{
            backgroundColor: 'transparent',
          }}
        >
          <Header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16px',
              backgroundColor: 'transparent',
              color: '#fff',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <img
                src="/ODS-11-Logo.png"
                alt="ODS 11 Logo"
                style={{
                  height: '40px',
                  objectFit: 'contain',
                }}
              />
              <span
                style={{
                  color: 'green',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginRight: '8px',
                }}
              >
                ODS 11 - Cidades Sustentáveis
              </span>
            </div>

            {/* Mobile Menu */}
            <div
              className="mobile-menu"
              style={{
                display: 'none',
              }}
            >
              <Button
                type="primary"
                icon={<MenuOutlined />}
                onClick={showDrawer}
                style={{
                  backgroundColor: '#003366',
                }}
              />
              <Drawer
                title="Menu"
                placement="right"
                closable={true}
                onClose={closeDrawer}
                open={drawerVisible}
              >
              </Drawer>
            </div>
          </Header>
          <Content
            style={{
              padding: '0 48px',
              backgroundColor: 'transparent',
            }}
          >
            {/* Sun Button with Modal */}
            <FloatButton
              icon={<SunOutlined />}
              type="primary"
              style={{
                right: 1255,
                bottom: 190,
              }}
              onClick={() => showModal(
                <>
                  <p>
                  A energia solar tem um enorme potencial para contribuir com o cumprimento do ODS 11, que visa tornar as cidades mais sustentáveis e resilientes. Ela pode ajudar na criação de infraestruturas urbanas mais ecológicas e na redução das emissões de gases de efeito estufa, fundamentais para mitigar as mudanças climáticas e melhorar a qualidade de vida nas cidades. A implementação de sistemas solares pode diminuir a dependência de fontes de energia não renováveis, aliviar a pressão sobre os sistemas de energia e aumentar a resiliência urbana, especialmente em regiões com alta vulnerabilidade a desastres climáticos. A adoção da energia solar também está alinhada com os esforços globais para promover uma economia mais verde e sustentável, que não apenas melhore a qualidade de vida nas cidades, mas também proporcione uma maior independência energética e redução de impactos ambientais.
                  </p>
                  <div>
                    <h4>Vídeo Relacionado:</h4>
                    <video width="475" height="315" controls ref={videoRef}>
                      <source src="/videos/EnergiaSolar.mp4" 
                      type="video/mp4" 
                      />
                    </video>
                  </div>
                </>
                )
              }
            />

            {/* Thunderbolt Button with Modal */}
            <FloatButton
              icon={<ThunderboltOutlined />}
              type="primary"
              style={{
                right: 1349,
                bottom: 668,
              }}
              onClick={() => showModal(
                <>
                  <p>
                  A energia eólica tem grande potencial para contribuir com o Objetivo de Desenvolvimento Sustentável (ODS) 11, que visa tornar as cidades mais sustentáveis, resilientes e inclusivas. A geração de energia a partir do vento pode ajudar a reduzir a dependência de fontes de energia poluentes, promover a eficiência energética e garantir a oferta de eletricidade limpa e acessível, características essenciais para a sustentabilidade das cidades. A energia eólica é uma das fontes de energia renovável mais promissoras para mitigar os impactos das mudanças climáticas nas áreas urbanas, uma vez que reduz significativamente as emissões de gases de efeito estufa. Além disso, a implantação de parques eólicos urbanos e em áreas periurbanas pode ajudar a descentralizar a geração de energia, tornando as cidades mais autossuficientes e menos vulneráveis a crises energéticas.
                  </p>
                  <div>
                    <h4>Vídeo Relacionado:</h4>
                    <video width="475" height="315" controls ref={videoRef}>
                      <source src="/videos/EnergiaEolica.mp4" 
                      type="video/mp4" 
                      />
                    </video>
                  </div>
                </>
                )
              }
            />

            {/* Global Button with Modal */}
            <FloatButton
              icon={<GlobalOutlined />}
              type="primary"
              style={{
                right: 1800,
                bottom: 425,
              }}
              onClick={() => showModal(
                <>
                  <p>
                    O Objetivo de Desenvolvimento Sustentável (ODS) 11, que busca tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis, tem como um de seus eixos a proteção e a gestão sustentável dos recursos naturais. As florestas são um componente essencial nesse processo, pois sua preservação contribui para o equilíbrio climático, a segurança hídrica e a redução de desastres naturais. A ODS 11 busca melhorar a qualidade de vida nas cidades, implementando práticas que integrem a preservação ambiental com o desenvolvimento urbano, promovendo cidades mais verdes e com maior qualidade de vida para seus habitantes​.
                  </p>
                  <div>
                    <h4>Vídeo Relacionado:</h4>
                    <video width="475" height="315" controls ref={videoRef}>
                      <source src="/videos/ConservacaoFlorestal.mp4" 
                      type="video/mp4" 
                      />
                    </video>
                  </div>
                  <div>
                    <audio controls autoPlay>
                      <source
                        src="/audios/forest.mp3"
                        type="audio/mp3"
                      />
                    </audio>
                  </div>
                </>
              )
              }
            />

            <FloatButton
              icon={<WifiOutlined />}
              type="primary"
              style={{
                right: 170,
                bottom: 580,
              }}
              onClick={() => showModal(
                <>
                  <p>
                    Para que prédios e arranha-céus possam se integrar ao modelo de cidade sustentável proposto pela ODS 11, diversas adaptações e estratégias são essenciais:
                  </p>
                  <ul>
                    <li><b>Fachadas Verdes:</b> Implementar fachadas e telhados verdes que ajudam a reduzir ilhas de calor, melhorar o conforto térmico interno e externo, e aumentar a área verde nas cidades.</li>
                    <li><b>Mobilidade Sustentável:</b> Localizar os prédios em áreas próximas ao transporte público e integrar estacionamentos para bicicletas e estações de recarga para veículos elétricos.</li>
                    <li><b>Conexão com o Entorno:</b> Projetar arranha-céus que respeitem o contexto urbano, com térreos ativos, praças públicas e espaços para interação social.</li>
                  </ul>
                </>
              )
              }
            />

            <FloatButton
              icon={<HomeOutlined />}
              type="primary"
              style={{
                right: 555,
                bottom: 295,
              }}
              onClick={() => showModal(<>
                <p>
                  As casas podem se adaptar ao modelo de cidades sustentáveis do ODS 11 com uma série de mudanças que promovem eficiência, inclusão e resiliência ambiental. Essas adaptações envolvem:
                </p>
                <ul>
                  <li><b>Eficiência Energética:</b> O uso de sistemas solares e eólicos para gerar energia renovável nas residências ajuda a reduzir a dependência de fontes fósseis e diminui o impacto ambiental.</li>
                  <li><b>Gestão de Resíduos:</b> Incorporar sistemas de coleta seletiva e compostagem dentro das casas apoia a redução de resíduos enviados a aterros.</li>
                  <li><b>Reuso de Recursos Naturais:</b> A instalação de sistemas de captação e reuso de água da chuva pode suprir demandas por água não potável, como para regar plantas ou lavar pisos, ajudando na conservação dos recursos hídricos</li>
                </ul>
              </>)}
            />

            <FloatButton
              icon={<MenuOutlined />}
              type="primary"
              style={{
                right: 50,
                bottom: 70,
              }}
              onClick={() =>
                showModal(
                  <>
                    <p>
                      Referências:
                      <br />
                      <a
                        href="https://www.iberdrola.com/sustentabilidade/comprometidos-objetivos-desenvolvimento-sustentavel/ods-11-cidades-e-comunidades-sustentaveis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Iberdrola - ODS 11
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://123ecos.com.br/docs/ods-11/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        123ecos - ODS 11
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.edp.com/pt-pt/sustentabilidade/ods-11-cidades-e-comunidades-sustentaveis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        EDP - ODS 11
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.uninter.com/noticias/para-construir-cidades-sustentaveis-e-inclusivas"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UNINTER - Para construir cidades sustentáveis e inclusivas
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.unep.org/pt-br/noticias-e-reportagens/comunicado-de-imprensa/os-planos-nacionais-de-acao-climatica-tem-metas"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UNEP - Os planos nacionais de ação climática têm metas florestais insuficientes e o desmatamento continua a aumentar
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.abrainc.org.br/sustentabilidade-e-urbanismo/2023/04/11/arranhaceus-sao-alternativa-para-melhor-aproveitamento-do-solo-e-evitar-espraiamento-das-cidades"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ABRAINC - Arranha ceus sao alternativa para melhor aproveitamento do solo e evitar espraiamento das cidades
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.archdaily.com.br/br/976923/o-desenvolvimento-urbano-sustentavel-na-agenda-2030-da-onu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ARCHDAILY - O desenvolvimento urbano sustentável na Agenda 2030 da ONU
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.archdaily.com.br/br/1001430/arranha-ceus-a-solucao-e-crescer-para-cima-com-terreos-amigaveis"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ARCHDAILY - A solução é crescer para cima com terrenos amigaveis
                      </a>
                    </p>
                  </>
                )
              }
            />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              backgroundColor: 'green',
              padding: '16px',
              color: '#fff',
            }}
          >
            Sistemas Multimídia 2024.2
          </Footer>
        </Layout>

        {/* Modal Dialog */}
        <Modal
          title="ODS 11 - Cidades Sustentáveis"
          open={modalVisible}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <div>{modalContent}</div>
        </Modal>
      </div>
    </>
  );
};

export default App;
