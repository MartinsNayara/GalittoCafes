# Espaço Cibs — Mini site de links

Site responsivo de página única para reunir os canais oficiais do estúdio.

## Estrutura

```text
espaco-cibs/
├── index.html
├── README.md
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
├── css/
│   └── style.css
└── js/
    ├── config.js
    └── main.js
```

## 1. Configure os links

Abra `js/config.js` e substitua os endereços de exemplo:

- `whatsapp`: link no formato `https://wa.me/55DDDNUMERO` (somente números depois de `wa.me/`).
- `instagram`: endereço do perfil do Espaço Cibs.
- `website`: endereço do site oficial.

## 2. Visualize localmente

Abra o arquivo `index.html` no navegador. Para uma experiência de desenvolvimento melhor, use a extensão **Live Server** no Visual Studio Code.

## 3. Publique no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `espaco-cibs`.
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório.
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação. O GitHub exibirá o endereço público do site na seção Pages.

## Personalização

As cores principais estão no início de `css/style.css`, nas variáveis `--brown`, `--green` e `--beige`. O monograma “C” pode ser substituído pela logo oficial dentro de `index.html`.
