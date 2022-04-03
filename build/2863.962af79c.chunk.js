"use strict";
(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([[2863],{

/***/ 82863:
/***/ ((module) => {

module.exports = JSON.parse('{"plugin.name":"Comentários","plugin.section":"plugin de comentários","plugin.section.item":"Configurações","common.button.back":"Voltar","nav.header.moderation":"Moderação","nav.header.settings":"Configurações","nav.item.updates":"Updates","nav.item.discover":"Descobrir","nav.item.reports":"Reports","nav.item.settings":"Configurações","page.common.item.status.OPEN":"Abrir","page.common.item.status.PENDING":"Pendente","page.common.item.status.BLOCKED":"Bloqueado","page.common.item.status.APPROVED":"Aprovado","page.common.item.status.TO_REVIEW":"Para revisar ({count, number})","page.common.item.status.REJECTED":"Rejeitado","page.common.item.status.REMOVED":"Removido pelo autor","page.updates.header":"Atualizações recentes","page.discover.header":"Descubra tópicos","page.discover.header.count":"entries found","page.discover.table.header.id":"ID","page.discover.table.header.author":"Autor","page.discover.table.header.message":"Messagem","page.discover.table.header.thread":"Thread of","page.discover.table.header.entry":"Entry","page.discover.table.header.lastUpdate":"Ultima atualização","page.discover.table.header.status":"Status","page.discover.table.header.actions":"Actions","page.discover.table.cell.thread":"Comentário #{id}","page.discover.table.action.display":"Display","page.discover.table.action.reports":"Reports","page.discover.table.empty":"Você ainda não tem comentários.","page.discover.table.empty.search":"Nenhum comentário corresponde à pesquisa.","page.discover.table.filters":"Filtrando","page.discover.table.reports.review":"Review reports","page.details.header":"Painel de discussão","page.details.header.description":"Pesquise e gerencie a discussão relacionada à entidade","page.details.panel.discussion":"Discussão","page.details.panel.discussion.nav.drilldown":"Pesquisa detalhada","page.details.panel.discussion.nav.back":"Ir para o topo","page.details.panel.discussion.warnings.reports.description":"Abrir reports","page.details.panel.discussion.warnings.reports.review":"Review","page.details.panel.discussion.warnings.reports.dialog.list":"Reports","page.details.panel.discussion.warnings.reports.dialog.header":"Moderation: Review open reports","page.details.panel.discussion.warnings.reports.dialog.reason":"Razão","page.details.panel.discussion.warnings.reports.dialog.reason.BAD_LANGUAGE":"Linguagem imprópria","page.details.panel.discussion.warnings.reports.dialog.reason.DISCRIMINATION":"Discrimination","page.details.panel.discussion.warnings.reports.dialog.reason.OTHER":"Outros","page.details.panel.discussion.warnings.reports.dialog.content":"Conteúdo","page.details.panel.discussion.warnings.reports.dialog.createdAt":"Issue date","page.details.panel.discussion.warnings.reports.dialog.status":"Status","page.details.panel.discussion.warnings.reports.dialog.status.OPEN":"Aberto","page.details.panel.discussion.warnings.reports.dialog.status.RESOLVED":"Resolvido","page.details.panel.discussion.warnings.reports.dialog.actions":"Ações","page.details.panel.discussion.warnings.reports.dialog.actions.resolve":"Resolver","page.details.panel.discussion.warnings.reports.dialog.confirmation.success":"Open report has been resolved","page.details.panel.discussion.status.blocked":"Bloqueado","page.details.panel.entity":"Entity details","page.details.panel.status":"Discussion is","page.details.panel.status.open":"Open","page.details.panel.status.blocked":"Bloqueado","page.details.panel.status.pending":"Pendente","page.details.panel.loading":"Fetching entity...","page.details.actions.comment.block":"Bloquear comentário","page.details.actions.comment.block.confirmation.header":"Moderação: Bloquear comentário","page.details.actions.comment.block.confirmation.description":"Deseja mesmo bloquear este comentário?","page.details.actions.comment.block.confirmation.button.confirm":"Sim, bloqueie","page.details.actions.comment.block.confirmation.success":"O comentário foi bloqueado","page.details.actions.comment.unblock":"Desbloquear comentário","page.details.actions.comment.unblock.confirmation.success":"O comentário foi desbloqueado","page.details.actions.comment.reports.review":"Análise","page.details.actions.thread.block":"Bloquear thread","page.details.actions.thread.block.confirmation.header":"Moderação: Bloquear thread","page.details.actions.thread.block.confirmation.description":"Você realmente quer bloquear todo o thread? Nenhuma outra discussão será permitida.","page.details.actions.thread.block.confirmation.button.confirm":"Sim, bloqueie","page.details.actions.thread.block.confirmation.success":"A thread foi bloqueada","page.details.actions.thread.unblock":"Desbloquear thread","page.details.actions.thread.unblock.confirmation.success":"A Thread foi desbloqueado","page.details.actions.comment.approve.confirmation.success":"O comentário foi aprovado","page.details.actions.comment.reject.confirmation.success":"O comentário foi rejeitado","page.details.filters.label":"View","page.details.filters.removed.visibility":"Mostrar comentários removidos","page.coming.soon":"Aguarde o que está por vir...","page.settings":"Configurações","page.settings.header.title":"Comentários","page.settings.header.description":"Configure seus recursos de moderação de comentários","page.settings.actions.submit":"Salvar","page.settings.actions.restore":"Restaurar configurações originais","page.settings.actions.restart":"Restart Strapi","page.settings.section.general":"Configurações gerais","page.settings.section.additional":"Configurações adicionais","page.settings.section.restore":"Restaurar configurações originais","page.settings.section.restore.subtitle":"Descartando todas as configurações aplicadas e voltando para as configurações padrão do plugin. Use razoável.","page.settings.form.enabledCollections.label":"Ativar comentários apenas para","page.settings.form.enabledCollections.placeholder":"Selecione uma ou mais collection","page.settings.form.enabledCollections.hint":"Se nenhum for selecionado, todos os tipos de conteúdo serão habilitados","page.settings.form.contentTypesSettings.label":"Tipos de conteúdo","page.settings.form.contentTypesSettings.tooltip":"Configuração personalizada por tipo de conteúdo","page.settings.form.moderatorRoles.label":"Envie notificações importantes para","page.settings.form.moderatorRoles.placeholder":"Selecione um ou mais Roles","page.settings.form.moderatorRoles.hint":"Roles que serão notificadas pelo plugin sobre ações significativas a serem executadas","page.settings.form.badWords.label":"Filtragem de palavrões","page.settings.form.badWords.hint":"Se ativado, todas as postagens/atualizações de comentários serão verificadas em relação a palavras impróprias","page.settings.form.gqlAuth.label":"GraphQL queries authorization","page.settings.form.gqlAuth.hint":"Se ativado, as queries e mutations da API GraphQL podem ser acionadas apenas por usuários autenticados do Strapi. Caso contrário, a API permanece aberta.","page.settings.form.approvalFlow.label":"Fluxo de aprovação","page.settings.form.approvalFlow.hint":"Os comentários associados ao tipo de conteúdo \\"{name}\\" passarão pelo fluxo de aprovação manual","page.settings.form.entryLabel.label":"Campos de título","page.settings.form.entryLabel.placeholder":"Selecione pelo menos um ou deixe em branco para aplicar os padrões","page.settings.form.entryLabel.hint":"Se deixado em branco, a renderização do título terá os seguintes campos ordenados: \\"Title\\", \\"Subject\\" & \\"Name\\"","page.settings.actions.restore.confirmation.header":"Restaurar a configuração padrão","page.settings.actions.restore.confirmation.description":"Você está prestes a restaurar a configuração do plug-in para seus valores padrão. Pode ter um impacto destrutivo no conteúdo já coletado. Você realmente quer continuar?","page.settings.actions.restore.confirmation.button.confirm":"Sim, quero restaurar","page.settings.actions.restart.alert.title":"Strapi requer reinicialização","page.settings.actions.restart.alert.description":"Você fez uma alteração de configuração que exige que seu aplicativo Strapi seja reiniciado para ter efeito no schema do GraphQL. Faça isso manualmente ou usando o trigger abaixo.","page.settings.actions.restart.alert.close":"Descartar","page.settings.notification.fetch.error":"Falha ao buscar a configuração. Tentando novamente...","page.settings.notification.submit.success":"A configuração foi salva com sucesso","page.settings.notification.submit.error":"Falha ao salvar a configuração. Tente novamente.","page.settings.notification.restore.success":"A configuração foi restaurada com sucesso","page.settings.notification.restore.error":"Falha ao restaurar a configuração. Tente novamente.","page.settings.notification.restart.success":"O aplicativo foi reiniciado com sucesso","page.settings.notification.restart.error":"Falha ao reiniciar seu aplicativo. Tente fazer manualmente.","page.settings.loading":"Buscando configuração...","compontents.confirmation.dialog.header":"Confirmação","compontents.confirmation.dialog.description":"Você realmente deseja realizar esta ação?","compontents.confirmation.dialog.button.confirm":"Sim eu quero","compontents.confirmation.dialog.button.cancel":"Cancelar","compontents.toogle.enabled":"Habilitado","compontents.toogle.disabled":"Desabilitado"}');

/***/ })

}]);