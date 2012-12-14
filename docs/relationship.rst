Relationships
=============

Relationships can be quickly defined using ``model.hasOne()`` and ``model.hasMany()`` methods in the :doc:`ref/model`.

.. note::
	<relationship> is the name of the relationship you pass to the relationship creation methods.

One-to-one relationship
-----------------------

When defining this it assumes the current model can only have 1 of the other model.

It provides a number of methods such as ``instance.get<relationship>()`` on the current model. If you have enabled autoFetch then it will appear as a property on the model (bear in mind this may take slightly longer to return).

Also (@kennydude's version only!) you can reverse-lookup one-to-one relationships very quickly using ``model.findBy<relationship>( otherModel, ... )`` which makes it very useful.

If you have a social network, you may want to find all of 1 user's messages, so you could do ``messages.findByUser( myuser, function(err, results){ ... } )`` which would work well.

Many-to-many relationships
--------------------------

Similar to the above, except works for more than one item.

However, it introduces some more methods than the above which are as follows:

.. js:function:: instance.set<relationship>( items, function(err){ .. } )

	:param list[instance] items: replacement list
	:param callback:
		Called when function is finished and returns the error if there was one

	This replaces the whole list of items that the current instance is related to.

	.. warning::
		This is not recommended if you can avoid id

.. js:function:: instance.remove<relationship>( function(err){ .. } )

	:param callback:
		Called when the list is deleted

	Removes the entire list

.. js:function:: instance.remove<relationship>( items..., function(err){ .. } )

	:param instance... items: Items to delete (separated arguments)
	:param callback:
		Called when the items are destroyed

	Deletes specified items from the list

.. js:function:: instance.add<relationship>( item..., extra, function(err){ .. } )
	
	:param instance... items: Items to add (separated arguments)
	:param object extra: Optional object of items to add extra to the link table
	:param callback:
		Called when the items are added

	Adds the specified items to the list

Reverse Relationships
---------------------

If you pass the reverse option in your model, it allows the child models to get the associated parent model.

To put it into more sense here is a diagram where we have said::
	
	parent.hasOne("child", child, {
		"reverse" : "parent"
	});

.. image:: reverseDiagram.png

