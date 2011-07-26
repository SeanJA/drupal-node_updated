$().ready(function(){
  if(Drupal.settings.node_updated){
    var node_updated = Drupal.settings.node_updated;
    var basePath = Drupal.settings.basePath;
    setInterval(function(){
      if($('#node-updated-message').length == 0){
        $.get(basePath+'node_updated/'+node_updated.node_id+'/'+node_updated.changed, function(data){
          if(data == 1){
            $('body').append('<div style="'+node_updated.css+'" id="node-updated-message">The content you are looking at has been updated. <a href="#" onClick="window.location.reload();return false;">Reload</a> to see the updated content.</div>');
            $('#node-updated-message').slideDown();
          }
        });
      }
    }, node_updated.interval);
  }
});