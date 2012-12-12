Instance Class
==============

See :doc:`model` for how to create these. Do not do this manually.

You can add custom methods to this using the ``methods`` option in the ``options`` parameter of ``orm.define()`` :doc:`See More... <orm>`

instance.save( callback )
-------------------------

Save the instance to the database. This is required if you have not turned on ``autoSave``.

Callback is sent ``error`` and ``instance`` as parameters.

Emits an ``save`` event once completed with ``error`` and ``instance`` as parameters. This is useful if you need to notify something like socket.io of new data without requiring to reference it everywhere in your code.

instance.saved
--------------

If the instance is saved or not

instance.remove( callback )
---------------------------

Remove the instance from the database.

Emits and ``remove`` event once completed with ``error`` and ``instance`` as parameters.

instance.isInstance()
---------------------

Is this instance an instance? Returns true

instance.on( *event*, *callback* )
----------------------------------

Adds an event handler to an event that is fired.