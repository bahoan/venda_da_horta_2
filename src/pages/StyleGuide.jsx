import React, { useState } from 'react';
import { 
  Input, 
  Select, 
  Checkbox, 
  Radio, 
  RadioGroup,
  Heading1,
  Heading2,
  Heading3,
  Subtitle,
  Paragraph,
  HighlightText,
  SmallText,
  Quote
} from '../components/ui';

export default function StyleGuide() {
  const [inputValue, setInputValue] = useState('');
  const [errorInputValue, setErrorInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  // Opções para o select
  const selectOptions = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
    { value: 'opcao3', label: 'Opção 3' },
  ];

  // Opções para o radio group
  const radioOptions = [
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Style Guide - Vendas DaHorta</h1>
      
      {/* Seção de Tipografia */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Tipografia</h2>
        
        <div className="grid gap-6">
          <div>
            <Heading3>Título Principal (H1)</Heading3>
            <Heading1>Transforme sua horta em um negócio lucrativo</Heading1>
          </div>
          
          <div>
            <Heading3>Título Secundário (H2)</Heading3>
            <Heading2>Depoimentos que vão te inspirar</Heading2>
          </div>
          
          <div>
            <Heading3>Título Terciário (H3)</Heading3>
            <Heading3>Como funciona o método</Heading3>
          </div>
          
          <div>
            <Heading3>Subtítulo (H4)</Heading3>
            <Subtitle>Etapa 1: Definição de estratégia</Subtitle>
          </div>
          
          <div>
            <Heading3>Texto de Destaque</Heading3>
            <HighlightText>Qualquer pessoa com acesso à internet <span className="text-brand-green">pode vender hortaliças e produtos da roça</span> pelo celular</HighlightText>
          </div>
          
          <div>
            <Heading3>Texto Regular</Heading3>
            <Paragraph>Nosso método exclusivo ajuda produtores de horta a encontrar clientes ideais, criar ofertas irresistíveis e estabelecer um sistema de vendas recorrentes que funciona mesmo sem experiência prévia em marketing.</Paragraph>
          </div>
          
          <div>
            <Heading3>Texto Pequeno</Heading3>
            <SmallText>*Resultados podem variar de acordo com a dedicação e implementação do método.</SmallText>
          </div>
          
          <div>
            <Heading3>Citação</Heading3>
            <Quote>Desde que comecei a usar o método Vendas da Horta, minhas vendas aumentaram 300% e agora tenho uma lista de espera de clientes.</Quote>
          </div>
        </div>
      </section>
      
      {/* Seção de Cores */}
      <section className="mb-16">
        <Heading2 className="mb-6 pb-2 border-b border-gray-200">Cores</Heading2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="h-24 bg-brand-green rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Brand Green (Primária)</p>
            <p className="text-xs text-gray-500">bg-brand-green (#07AA1D)</p>
          </div>
          
          <div>
            <div className="h-24 bg-brand-green-dark rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Brand Green Dark</p>
            <p className="text-xs text-gray-500">bg-brand-green-dark (#058e18)</p>
          </div>
          
          <div>
            <div className="h-24 bg-brand-orange rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Brand Orange (Secundária)</p>
            <p className="text-xs text-gray-500">bg-brand-orange (#ff6b00)</p>
          </div>
          
          <div>
            <div className="h-24 bg-brand-orange-light rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Brand Orange Light</p>
            <p className="text-xs text-gray-500">bg-brand-orange-light (#ff8533)</p>
          </div>
          
          <div>
            <div className="h-24 bg-brand-grey rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Brand Grey</p>
            <p className="text-xs text-gray-500">bg-brand-grey (#E9E9E9)</p>
          </div>
          
          <div>
            <div className="h-24 bg-brand-grey-dark rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Brand Grey Dark</p>
            <p className="text-xs text-gray-500">bg-brand-grey-dark (#d1d1d1)</p>
          </div>
          
          <div>
            <div className="h-24 bg-text-dark rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Text Dark</p>
            <p className="text-xs text-gray-500">text-text-dark (#1e293b)</p>
          </div>
          
          <div>
            <div className="h-24 bg-text-medium rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Text Medium</p>
            <p className="text-xs text-gray-500">text-text-medium (#475569)</p>
          </div>
          
          <div>
            <div className="h-24 bg-text-light rounded-lg mb-2"></div>
            <p className="text-sm font-medium">Text Light</p>
            <p className="text-xs text-gray-500">text-text-light (#64748b)</p>
          </div>
          
          <div>
            <div className="h-24 bg-white border border-gray-200 rounded-lg mb-2"></div>
            <p className="text-sm font-medium">White</p>
            <p className="text-xs text-gray-500">bg-white</p>
          </div>
        </div>
      </section>
      
      {/* Seção de Formulários */}
      <section className="mb-16">
        <Heading2 className="mb-6 pb-2 border-b border-gray-200">Formulários</Heading2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Heading3>Campos de Texto</Heading3>
            <div className="space-y-4">
              <div>
                <Input 
                  label="Input Padrão"
                  id="default-input"
                  placeholder="Digite aqui..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Input padrão com foco que remove a borda preta e adiciona um anel verde.
                </p>
              </div>
              
              <div>
                <Input 
                  label="Input com Erro"
                  id="error-input"
                  placeholder="Digite aqui..."
                  value={errorInputValue}
                  onChange={(e) => setErrorInputValue(e.target.value)}
                  error="Mensagem de erro exemplo"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Input com estado de erro e mensagem de erro abaixo.
                </p>
              </div>
              
              <div>
                <Input 
                  label="Input Obrigatório"
                  id="required-input"
                  placeholder="Digite aqui..."
                  required={true}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Input com marcação de campo obrigatório.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Heading3>Seletores</Heading3>
            <div className="space-y-4">
              <div>
                <Select 
                  label="Select"
                  id="select-example"
                  options={selectOptions}
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Select com estilo consistente com os inputs.
                </p>
              </div>
              
              <div className="mt-6">
                <Checkbox 
                  label="Checkbox Exemplo"
                  id="checkbox-example"
                  checked={checkboxValue}
                  onChange={(e) => setCheckboxValue(e.target.checked)}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Checkbox com estilo consistente.
                </p>
              </div>
              
              <div className="mt-6">
                <RadioGroup 
                  label="Radio Button"
                  name="radio-group"
                  options={radioOptions}
                  value={radioValue}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-2">
                  Radio buttons com estilo consistente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Botões */}
      <section className="mb-16">
        <Heading2 className="mb-6 pb-2 border-b border-gray-200">Botões</Heading2>
        
        <div className="grid gap-8">
          <div>
            <Heading3>Botões Primários (Verde)</Heading3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-green text-white font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-green-dark hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Primário (Verde)
              </button>
              
              <button className="bg-brand-green text-white font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-green-dark hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100
                opacity-75">
                Botão Primário Desabilitado
              </button>
              
              <button className="bg-brand-green text-white font-bold py-2 px-4 rounded-lg text-sm
                transition-all duration-300
                hover:md:bg-brand-green-dark hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Primário Pequeno
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <span className="hidden md:inline">Desktop: Hover eleva o botão e escurece a cor</span>
              <span className="md:hidden">Mobile: Toque aumenta o tamanho do botão</span>
            </p>
          </div>
          
          <div>
            <Heading3>Botões Secundários (Laranja)</Heading3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-orange text-white font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-orange-light hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Secundário (Laranja)
              </button>
              
              <button className="bg-brand-orange text-white font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-orange-light hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100
                opacity-75">
                Botão Secundário Desabilitado
              </button>
              
              <button className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg text-sm
                transition-all duration-300
                hover:md:bg-brand-orange-light hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Secundário Pequeno
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <span className="hidden md:inline">Desktop: Hover eleva o botão e clareia a cor</span>
              <span className="md:hidden">Mobile: Toque aumenta o tamanho do botão</span>
            </p>
          </div>
          
          <div>
            <Heading3>Botões Cinza</Heading3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-grey text-text-dark font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-grey-dark hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Cinza
              </button>
              
              <button className="bg-brand-grey text-text-dark font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-grey-dark hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100
                opacity-75">
                Botão Cinza Desabilitado
              </button>
              
              <button className="bg-brand-grey text-text-dark font-bold py-2 px-4 rounded-lg text-sm
                transition-all duration-300
                hover:md:bg-brand-grey-dark hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Cinza Pequeno
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <span className="hidden md:inline">Desktop: Hover eleva o botão e escurece a cor</span>
              <span className="md:hidden">Mobile: Toque aumenta o tamanho do botão</span>
            </p>
          </div>
          
          <div>
            <Heading3>Botões Outline</Heading3>
            <div className="flex flex-wrap gap-4">
              <button className="border-2 border-brand-green text-brand-green bg-transparent font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-green hover:md:text-white hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Outline (Verde)
              </button>
              
              <button className="border-2 border-brand-orange text-brand-orange bg-transparent font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-orange hover:md:text-white hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Outline (Laranja)
              </button>
              
              <button className="border-2 border-brand-grey text-text-dark bg-transparent font-bold py-3 px-6 rounded-lg
                transition-all duration-300
                hover:md:bg-brand-grey hover:md:-translate-y-1 hover:md:shadow-md
                active:scale-105 md:active:scale-100">
                Botão Outline (Cinza)
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <span className="hidden md:inline">Desktop: Hover preenche o botão, muda a cor do texto e eleva</span>
              <span className="md:hidden">Mobile: Toque aumenta o tamanho do botão</span>
            </p>
          </div>
          
          <div>
            <Heading3>Botões de Link</Heading3>
            <div className="flex flex-wrap gap-4">
              <button className="text-brand-green font-semibold underline
                transition-all duration-300
                hover:md:text-brand-green-dark
                active:scale-105 md:active:scale-100">
                Link Simples (Verde)
              </button>
              
              <button className="text-brand-orange font-semibold underline
                transition-all duration-300
                hover:md:text-brand-orange-light
                active:scale-105 md:active:scale-100">
                Link Simples (Laranja)
              </button>
              
              <button className="text-text-dark font-semibold underline
                transition-all duration-300
                hover:md:text-text-medium
                active:scale-105 md:active:scale-100">
                Link Simples (Cinza)
              </button>
              
              <button className="text-brand-green font-semibold flex items-center gap-1
                transition-all duration-300
                hover:md:text-brand-green-dark
                active:scale-105 md:active:scale-100">
                Link com Ícone
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              <span className="hidden md:inline">Desktop: Hover muda a cor do texto</span>
              <span className="md:hidden">Mobile: Toque aumenta o tamanho do link</span>
            </p>
          </div>
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Comportamento Responsivo dos Botões</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Desktop (Hover)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Em telas maiores, os botões têm efeito de elevação (translate-y) e mudança de cor ao passar o mouse.
                </p>
                <div className="flex justify-center">
                  <button className="bg-brand-green text-white font-bold py-3 px-6 rounded-lg
                    transition-all duration-300
                    hover:md:bg-brand-green-dark hover:md:-translate-y-1 hover:md:shadow-md">
                    Passe o mouse aqui
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Mobile (Toque)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Em dispositivos móveis, os botões aumentam de tamanho ao serem tocados para feedback tátil.
                </p>
                <div className="flex justify-center">
                  <button className="bg-brand-orange text-white font-bold py-3 px-6 rounded-lg
                    transition-all duration-300
                    active:scale-105 md:active:scale-100">
                    Toque aqui (em mobile)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Cards</h2>
        
        <div className="space-y-8">
          <div>
            <Heading3>Cards Básicos</Heading3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Card Padrão</h3>
                <p className="text-gray-600">
                  Este é um exemplo de card com padding menor no mobile (p-4) e maior no desktop (p-6).
                </p>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Card com Borda</h3>
                <p className="text-gray-600">
                  Este card usa borda em vez de sombra, com padding responsivo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md border-l-4 border-brand-green p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Card Destacado</h3>
                <p className="text-gray-600">
                  Card com borda lateral verde para destacar conteúdo importante.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Heading3>Cards de Recursos</Heading3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-lg shadow-md p-5 md:p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Recurso 1</h3>
                <p className="text-gray-600">
                  Descrição do recurso com espaçamento responsivo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 md:p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Recurso 2</h3>
                <p className="text-gray-600">
                  Descrição do recurso com espaçamento responsivo.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-5 md:p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-grey rounded-full flex items-center justify-center text-text-dark mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Recurso 3</h3>
                <p className="text-gray-600">
                  Descrição do recurso com espaçamento responsivo.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Heading3>Layout Responsivo</Heading3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow p-4 md:p-6">
                  <h3 className="text-lg font-semibold mb-2">Item {item}</h3>
                  <p className="text-gray-600">
                    Este grid muda de 1 coluna no mobile para 2 no tablet e 4 no desktop.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Espaçamentos */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Espaçamentos Responsivos</h2>
        
        <div className="space-y-8">
          <div>
            <Heading3>Margens entre Seções</Heading3>
            <div className="space-y-8 md:space-y-16 bg-gray-100 p-4">
              <div className="bg-white p-4 rounded">Seção 1</div>
              <div className="bg-white p-4 rounded">Seção 2</div>
              <div className="bg-white p-4 rounded">Seção 3</div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Espaçamento vertical: 2rem (32px) no mobile, 4rem (64px) no desktop
            </p>
          </div>
          
          <div>
            <Heading3>Margens entre Componentes</Heading3>
            <div className="space-y-4 md:space-y-8 bg-gray-100 p-4">
              <div className="bg-white p-4 rounded">Componente 1</div>
              <div className="bg-white p-4 rounded">Componente 2</div>
              <div className="bg-white p-4 rounded">Componente 3</div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Espaçamento vertical: 1rem (16px) no mobile, 2rem (32px) no desktop
            </p>
          </div>
          
          <div>
            <Heading3>Margens entre Elementos</Heading3>
            <div className="space-y-2 md:space-y-4 bg-gray-100 p-4">
              <div className="bg-white p-2 rounded">Elemento 1</div>
              <div className="bg-white p-2 rounded">Elemento 2</div>
              <div className="bg-white p-2 rounded">Elemento 3</div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Espaçamento vertical: 0.5rem (8px) no mobile, 1rem (16px) no desktop
            </p>
          </div>
        </div>
      </section>
      
      {/* Seção de Layout */}
      <section className="mb-16">
        <Heading2 className="mb-6 pb-2 border-b border-gray-200">Layout</Heading2>
        
        <div className="grid gap-8">
          <div>
            <Heading3>Layout Responsivo</Heading3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow p-4 md:p-6">
                  <h3 className="text-lg font-semibold mb-2">Item {item}</h3>
                  <p className="text-gray-600">
                    Este grid muda de 1 coluna no mobile para 2 no tablet e 4 no desktop.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="text-center text-sm text-gray-500 mt-16">
        <p>Style Guide - Vendas DaHorta - {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
