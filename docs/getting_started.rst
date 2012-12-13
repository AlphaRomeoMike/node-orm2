Getting Started
===============

To get started is very simple.

Adding ORM to your app
----------------------

First of all you need to add node-orm as a dependency to your node application.

This involves using the ``package.json`` file of which you can find a cheatsheat `here <http://package.json.nodejitsu.com/>`_

Add to your node.js application to use @kennydude's version::
	
	"dependencies" : {
		"orm" : "https://github.com/kennydude/node-orm2/tarball/master"
	}

or to use the master version::
	
	"dependencies" : {
		"orm" : ">=2.0.0-alpha6"
	}

Then run ``npm install`` to install orm to the local ``node_modules`` directory automatically.

Using ORM in your app
---------------------

Simply require it::
	
	var orm = require("orm");

And then connect to your database::
	
	orm.connect("mysql://test:test@localhost/text", function(err, db){
		// db is now available to use! ^__^
	});

And that is about it. For more on the connections string see :doc:`ref/orm`.

At this point you will declare your models like so::
	
	orm.connect("mysql://test:test@localhost/text", function(err, db){
		// db is now available to use! ^__^
		var Person = db.define('person', {
        	name      : String
        });
	});