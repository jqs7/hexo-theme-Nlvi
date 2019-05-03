{% if theme.comments.gitalk %}
<!-- Gitment Comments -->
<div id="gitalk"></div>
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>
<script>
var gitalk = new Gitalk({
  owner: '{{theme.comments.gitalk.owner}}',
  repo: '{{theme.comments.gitalk.repo}}',
  clientID: '{{theme.comments.gitalk.client_id}}',
  clientSecret: '{{theme.comments.gitalk.client_secret}}',
  admin: ['{{theme.comments.gitalk.owner}}'],
  distractionFreeMode: false,
  createIssueManually: true,
})
gitalk.render('gitalk')
</script>
{% endif %}