import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import * as S from './styles'

import ManualConvencional from '../../images/acessorios/ot-convencional-sf.png'
import ManualBlocante from '../../images/acessorios/tl-blocante-sf.png'
import zoom from '../../images/icons/zoom.png'
import close from '../../images/icons/close.png'

import { Container } from '../../styles'
import Subtitle from '../Subtitle'

interface ImageEixos {
  url: string
}

interface ModalState extends ImageEixos {
  isVisible: boolean
}

const Manual = () => {
  const [convencional, setConvencional] = useState(false)

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    url: 'url'
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      url: ''
    })
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <S.Section>
      <Container>
        <Subtitle>Manual dos eixos</Subtitle>
        <>
          <S.ContainerButtons>
            <S.TabButton
              onClick={() => setConvencional(false)}
              type="button"
              isActive={!convencional}
            >
              Blocante
            </S.TabButton>
            <S.TabButton
              onClick={() => setConvencional(true)}
              type="button"
              isActive={convencional}
            >
              Convencional
            </S.TabButton>
          </S.ContainerButtons>
          <div>
            {convencional ? (
              <S.ContentContainer>
                <S.TableContainer>
                  <table>
                    <thead>
                      <tr>
                        <th>Identificação</th>
                        <th>Descrição</th>
                        <th>Código Spicer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Eixo Diferencial 44-3/216, relação 3,07 OT</td>
                        <td>10055774</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Porca de Pinhão</td>
                        <td>30185</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Terminal de Diferencial</td>
                        <td>BA202789-X</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Flange de Acoplamento de Diferencia</td>
                        <td>BA202967</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Flange de Acoplamento de Diferencial</td>
                        <td>BA401524-X</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Terminal de Diferencial</td>
                        <td>BA201385-X</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Flange de Acoplamento de Diferencial</td>
                        <td>2-1-3101X</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Retentor de Pinhão</td>
                        <td>BA203822</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Retentor de Pinhão</td>
                        <td>44895</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Kit de Rolamentos de Pinhão</td>
                        <td>BA401214-X</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Kit de Calços</td>
                        <td>10236866</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Bujão do respiro</td>
                        <td>BA203578</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Bujão do respiro</td>
                        <td>BA203396</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Kit reparo do Semieixo sem rasgo de trava</td>
                        <td>BA401483-X </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Kit reparo do Semieixo sem rasgo de trava</td>
                        <td>BA401230-X</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Kit reparo do Semieixo sem rasgo de trava</td>
                        <td>BA401348</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Semieixo Completo LD/LE (30 estrias, 5 furos, 732mm)
                        </td>
                        <td>BA203287 </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Semieixo Completo LD/LE (30 estrias, 5 furos, 732mm)
                        </td>
                        <td>BA202787</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Semieixo Completo LD (30 estrias, 5 furos, 694mm){' '}
                        </td>
                        <td>BA203338-2</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo (30 estrias, 5 furos, 732mm)</td>
                        <td>BA203288</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo (30 estrias, 5 furos, 732mm)</td>
                        <td>BA203304</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo (30 estrias, 5 furos, 732mm)</td>
                        <td>BA202788</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LE (30 estrias, 5 furos, 746mm)</td>
                        <td>BA203263-1</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LD (30 estrias, 5 furos, 694mm)</td>
                        <td>BA203263-2 B</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LE (30 estrias, 5 furos, 767mm)</td>
                        <td>BA203811-1</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LD (30 estrias, 5 furos, 715mm)</td>
                        <td>BA203811-2</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (45x11 - furo rosca de 3/8”)</td>
                        <td>BA401379-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (41x09 - furo rosca de 3/8”)</td>
                        <td>BA401380-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (46x13 - furo rosca de 3/8”)</td>
                        <td>22856-1X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (43x13 - furo rosca de 3/8”)</td>
                        <td>23592-1X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (47x11 - furo rosca de 7/16”)</td>
                        <td>BA401320-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (41x11 - furo rosca de 3/8”)</td>
                        <td>BA401378-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (39x08 - furo rosca de 3/8”)</td>
                        <td>BA401423-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (43x09 - furo rosca de 3/8”)</td>
                        <td>BA401388-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (43x09 - furo rosca de 3/8”)</td>
                        <td>BA401234-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (47x11 - furo rosca de 3/8”)</td>
                        <td>BA401232-X</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          Caixa Dif Completa (OT - furo parafuso 10,2 mm -
                          planetária 30 estrias)
                        </td>
                        <td>BA202934</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          Caixa Dif Completa (OT - furo parafuso 11,8 mm -
                          planetária 30 estrias)
                        </td>
                        <td>BA203301</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          Caixa Dif Completa (OT - furo parafuso 10,2 mm -
                          planetária 30 estrias)
                        </td>
                        <td>BA203323</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Kit de Parafusos da Coroa (rosca de 3/8”)</td>
                        <td>BA401150-1X</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Kit de Parafusos da Coroa (rosca de 7/16”)</td>
                        <td>BA401319-X</td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Kit de Rolamentos de Caixa Diferencial</td>
                        <td>706032-X</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>Junta Líquida Reinzosil</td>
                        <td>70-31414-10</td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>Tampa de Carcaça</td>
                        <td>BA203675</td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>Kit Tampa de Carcaça</td>
                        <td>BA401345</td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>
                          Bujão mag. furo quad. 9,8 mm (rosca NPTF 1/2 - 14){' '}
                        </td>
                        <td>43181</td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>Bujão tampão de borracha</td>
                        <td>41356</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>
                          Kit de Reparo de Caixa Diferencial OT (estrias
                          internas na planetária = 30)
                        </td>
                        <td>BA401178-X</td>
                      </tr>
                      <tr>
                        <td>38</td>
                        <td>
                          Kit de Reparo de Caixa Diferencial OT (estrias
                          internas na planetária = 30)
                        </td>
                        <td>BA401318-X</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>Caixa Dif Vazia (OT - furo parafuso 11,8 mm)</td>
                        <td>BA203302</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>Caixa Dif Vazia (OT - furo parafuso 10,2 mm)</td>
                        <td>BA203324</td>
                      </tr>
                      <tr>
                        <td>41</td>
                        <td>Caixa Dif Vazia (OT - furo parafuso 10,2 mm)</td>
                        <td>BA203254</td>
                      </tr>
                      <tr>
                        <td>44</td>
                        <td>
                          Kit de Reparo de Caixa Diferencial TL (estrias
                          internas na planetária = 30)
                        </td>
                        <td>BA401186-X</td>
                      </tr>
                      <tr>
                        <td>-</td>
                        <td>Óleo Diferencial OT (Convencional) </td>
                        <td>85W140</td>
                      </tr>
                    </tbody>
                  </table>
                </S.TableContainer>
                <S.ImageEixoContainer>
                  <S.ImageEixo
                    src={ManualConvencional}
                    alt="Foto de manual de peça automotiva"
                    onClick={() =>
                      setModal({
                        isVisible: true,
                        url: ManualConvencional
                      })
                    }
                  />
                  <span>
                    <S.Zoom src={zoom} alt="icone de zoom" />
                  </span>
                </S.ImageEixoContainer>
              </S.ContentContainer>
            ) : (
              <S.ContentContainer>
                <S.TableContainer>
                  <table>
                    <thead>
                      <tr>
                        <th>Identificação</th>
                        <th>Descrição</th>
                        <th>Código Spicer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>Porca de Pinhão</td>
                        <td>30185</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Terminal de Diferencial</td>
                        <td>BA202789-X</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Flange de Acoplamento de Diferencial</td>
                        <td>BA202967</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Flange de Acoplamento de Diferencial</td>
                        <td>BA401524-X</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Terminal de Diferencial</td>
                        <td>BA201385-X</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Flange de Acoplamento de Diferencial</td>
                        <td>2-1-3101X</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Retentor de Pinhão</td>
                        <td>BA203822</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Retentor de Pinhão</td>
                        <td>44895</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Kit de Rolamentos de Pinhão</td>
                        <td>BA401214-X</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Kit de Calços</td>
                        <td>10236866</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Bujão do respiro</td>
                        <td>BA203578</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Bujão do respiro</td>
                        <td>BA203396</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Kit reparo do Semieixo sem rasgo de trava</td>
                        <td>BA401483-X</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Kit reparo do Semieixo com rasgo de trava</td>
                        <td>BA401230-X</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Kit reparo do Semieixo com rasgo de trava</td>
                        <td>BA401348</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Semieixo Completo LD/LE (30 estrias, 5 furos, 732mm)
                        </td>
                        <td>BA203287</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Semieixo Completo LD/LE (30 estrias, 5 furos, 732mm)
                        </td>
                        <td>BA202787</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>
                          Semieixo Completo LD (30 estrias, 5 furos, 694mm){' '}
                        </td>
                        <td>BA203338-2</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo (30 estrias, 5 furos, 732mm)</td>
                        <td>BA203288</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo (30 estrias, 5 furos, 732mm)</td>
                        <td>BA203304</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo (30 estrias, 5 furos, 732mm)</td>
                        <td>BA202788</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LE (30 estrias, 5 furos, 746mm)</td>
                        <td>BA203263-1</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LD (30 estrias, 5 furos, 694mm)</td>
                        <td>BA203263-2</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LE (30 estrias, 5 furos, 767mm)</td>
                        <td>BA203811-1</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Semieixo LD (30 estrias, 5 furos, 715mm)</td>
                        <td>BA203811-2</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (45x11 - furo rosca de 3/8”)</td>
                        <td>BA401379-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (41x09 - furo rosca de 3/8”)</td>
                        <td>BA401380-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (46x13 - furo rosca de 3/8”)</td>
                        <td>22856-1X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (43x13 - furo rosca de 3/8”)</td>
                        <td>23592-1X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (47x11 - furo rosca de 7/16”)</td>
                        <td>BA401320-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (41x11 - furo rosca de 3/8”)</td>
                        <td>BA401378-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (39x08 - furo rosca de 3/8”)</td>
                        <td>BA401423-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (43x09 - furo rosca de 3/8”)</td>
                        <td>BA401388-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (43x09 - furo rosca de 3/8”)</td>
                        <td>BA401234-X</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Coroa e Pinhão (47x11 - furo rosca de 3/8”)</td>
                        <td>BA401232-X</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          Caixa Dif Completa (TL - furo parafuso 10,2 mm -
                          planetária 30 estrias)
                        </td>
                        <td>BA202835</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          Caixa Dif Completa (TL - furo parafuso 10,2 mm -
                          planetária 30 estrias)
                        </td>
                        <td>BA202818</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>
                          Caixa Dif Completa a (TL - furo parafuso 11,8 mm -
                          planetária 30 estrias)
                        </td>
                        <td>BA203681</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Kit de Parafusos da Coroa (rosca de 3/8”)</td>
                        <td>BA401150-1X</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Kit de Parafusos da Coroa (rosca de 7/16”)</td>
                        <td>BA401319-X</td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Kit de Rolamentos de Caixa Diferencial</td>
                        <td>706032-X</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>Junta Líquida Reinzosil</td>
                        <td>70-31414-10</td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>Tampa de Carcaça</td>
                        <td>BA203675</td>
                      </tr>
                      <tr>
                        <td>33</td>
                        <td>Kit Tampa de Carcaça</td>
                        <td>BA401345</td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>
                          Bujão magnético furo quadrado 9,8 mm (rosca NPTF 1/2 -
                          14)
                        </td>
                        <td>43181</td>
                      </tr>
                      <tr>
                        <td>34</td>
                        <td>Bujão tampão de borracha</td>
                        <td>41356</td>
                      </tr>
                      <tr>
                        <td>44</td>
                        <td>
                          Kit de Reparo de Caixa Diferencial TL (estrias
                          internas na planetária = 30)
                        </td>
                        <td>BA401186-X</td>
                      </tr>
                      <tr>
                        <td>45</td>
                        <td>Kit de Discos de Fricção TL 7</td>
                        <td>707018-X</td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>Caixa Dif Vazia (TL - furo parafuso 10,2 mm)</td>
                        <td>BA203424</td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>Caixa Dif Vazia (TL - furo parafuso 10,2 mm)</td>
                        <td>BA203326</td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>Caixa Dif Vazia (TL - furo parafuso 11,8 mm)</td>
                        <td>BA203659</td>
                      </tr>
                      <tr>
                        <td>-</td>
                        <td>Óleo Diferencial TL (Blocante) </td>
                        <td>85W140LS</td>
                      </tr>
                    </tbody>
                  </table>
                </S.TableContainer>
                <S.ImageEixoContainer>
                  <S.ImageEixo
                    src={ManualBlocante}
                    alt="Foto de manual de peça automotiva"
                    onClick={() =>
                      setModal({
                        isVisible: true,
                        url: ManualBlocante
                      })
                    }
                  />
                  <span>
                    <S.Zoom src={zoom} alt="icone de zoom" />
                  </span>
                </S.ImageEixoContainer>
              </S.ContentContainer>
            )}
          </div>
          <div>
            <S.ContainerText>
              <Subtitle>Informações técnicas</Subtitle>
              <p data-aos="fade-right">Código Dana 10055774</p>
              <p data-aos="fade-right">Modelo eixo Dana 44-3 (M216)</p>
              <p data-aos="fade-right">
                Não acompanha conjunto de freio e suportes de fixação da
                suspensão
              </p>
              <p data-aos="fade-right">Relação 3,07:1</p>
              <p data-aos="fade-right">Tipo convencional e blocante</p>
              <p data-aos="fade-right">Semi-flutuante</p>
              <p data-aos="fade-right">
                Furação de roda 5 furos, Diâmetro 114,3mm, não Incluso
                prisioneiros de roda
              </p>
              <p data-aos="fade-right">
                Distância entre flanges de freio 1302,80mm
              </p>
              <p data-aos="fade-right">
                Acoplamento com eixo cardan: Terminal série 1330 (Cruzeta
                5-273XS)
              </p>
              <p data-aos="fade-right">
                Diâmetro dos tubos 70mm, Espessura 8,3mm
              </p>
              <p data-aos="fade-right">
                Aplicações: Opala, Maverick, para as demais aplicações e
                adequações necessárias para instalação do eixo em seu veículo
                consulte o seu mecânico especializado
              </p>
            </S.ContainerText>
          </div>
        </>
      </Container>
      <S.Modal className={modal.isVisible ? 'visible' : ''}>
        <S.ModalContent>
          <img
            src={close}
            alt="icone de fechar"
            className="closeIcon"
            onClick={closeModal}
          />
          <img src={modal.url} alt="Foto de manual de peça automotiva" />
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </S.Section>
  )
}

export default Manual
