<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.6/platform.min.js"></script>
    <script type="text/javascript">
      // history.pushState(null, null, location.href);
      // $(window).on('popstate', function(){
      //   history.go(1);
      // });
  <script type="module" src="./script.js">
let c = 6 * 60 * 60; setInterval(() => 
{ $("#hour").text(Math.floor(c / 3600)); 
 $("#min").text(Math.floor((c % 3600) / 60)); 
 $("#sec").text(Math.floor(c % 60)); c = c - 1; }, 1000)
       $("#device").text(platform.description);
      </script>
