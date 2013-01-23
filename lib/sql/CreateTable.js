// Create Table
module.exports = Builder;

function Builder(opts) {
	this.escapeId = opts.escapeId;
	this.escape   = opts.escape;
	this.clear();
}

Builder.prototype.clear = function(){
	this.tbl = null;
	this.fields = [];
	return this;
};

Builder.prototype.table = function(tb){
	this.tbl = tb;
	return this;
}

Builder.prototype.add_field = function(n, t){
	this.fields.push([ n, t ]);
	return this;
};

Builder.prototype.create_sql = function(){
	fields = [];
	for(x in this.fields){
		f = this.fields[x];
		if(f[1] == "number"){
			f[1] = "int(11)";
		}
		fields.push( f[0] + " " + f[1] );
	}

	return "CREATE TABLE " + this.tbl + " (\n\t`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\n\t"+ fields.join(",\n\t") + "\n);";
};