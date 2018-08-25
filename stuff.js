<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script type="text/javascript" src="s/hammermin.js"></script>
<script type="text/javascript" src="s/jquerymousewheel.js"></script>
<script type="text/javascript" src="s/script.js"></script>
<script type="text/javascript" src="s/mapplic.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    // Previous source: https://digitalheights.com.au/static/animalaidabroad/world.json
    var map = $('#mapplic').mapplic({
      source: 'https://cdn.rawgit.com/codersforcauses/animalaidabroad/dddb570e/world.json',
      height: 600,
      sidebar: false,
      minimap: false,
      fullscreen: false,
      maxscale: 3,
      developer: false,
      skin: 'mapplic-light'
    });
    
    map.on('mapready', function(e, self) {
      console.log('Map is ready!')
      // self grants direct access to the map object
      // The map will be focused on the washing machine by default
      //self.moveTo(0.67, 0.62, 2, 0);
	});
  });
</script>
