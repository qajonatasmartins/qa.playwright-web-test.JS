# qa.playwright-web-test.JS

Projeto base playwright para testes web

## Formas de execuão do Playwright

1. Executando todos os testes: `npx playwright test`
2. Executando um único arquivo de teste: `npx playwright test landing-page.spec.ts`
3. Execute um conjunto de arquivos de teste: `npx playwright test tests/todo-page/ tests/landing-page/`
4. Execute arquivos que possuem landing ou login no nome do arquivo: `npx playwright test landing login`
5. Execute o teste com o título: `npx playwright test -g "add a todo item"`
6. Testes de execução no modo encabeçado: `npx playwright test landing-page.spec.ts --headed`
7. Executando testes em um projeto específico: `npx playwright test landing-page.ts --project=chromium`
8. Depurando todos os testes: `npx playwright test --debug`
9. Depurando um arquivo de teste: `npx playwright test example.spec.ts --debug`
10. Depurando um teste do número da linha em que o test(.. é definido: `npx playwright test example.spec.ts:10 --debug`
11. Desenvolvendo o código em playwright em real time: `npx playwright codegen url_do_site`. Exemplo: `npx playwright codegen demo.playwright.dev/todomvc`
12. Desativar paralelização: `npx playwright test --workers=1`
13. Escolha um report: `npx playwright test --reporter=dot` [link dos reports](https://playwright.dev/docs/test-reporters)
14. Peça ajuda: `npx playwright test --help`. [mais informações](https://playwright.dev/docs/test-cli)