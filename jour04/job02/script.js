
function jsonValueKey(json_txt, key)
{
	let value = JSON.parse(json_txt);
	return value[key];
}




var json = '{"name":"Messi", "poste":"AD", "club":"FC Barcelone", "selection":"Argentine", "naissance":"1987"}';

console.log(jsonValueKey(json, "club"));