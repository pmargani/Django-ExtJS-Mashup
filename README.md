Django-ExtJS-Mashup
===================

The result of getting the Django and ExtJS startup tutorials to work together. 

Setup
====
   * cd to top of repo
   * cp settings.py.default to settings.py
   * edit settings.py
       * look for # MODIFY
       * paths should point to where you cloned this repo
   * create the necessary postgres DB
   * create a symbolic link to the extjs 4.1.1 library
      * cd polls/static/js
      * mkdir lib; cd lib
      * ln -s /home/gbpht/enigma/extern/extjs-4.1.1 extjs

Running
======
   * cd to top of repo
   * python manage.py runserver 0.0.0.0:9001
   * point browser to http://localhost:9001/polls/

