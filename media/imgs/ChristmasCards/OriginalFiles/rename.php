<?php
         foreach(scandir('.') as $file) if(strpos($file,'.JPG')!==FALSE)rename($file,substr($file,0,3).'.jpg');
  ?>