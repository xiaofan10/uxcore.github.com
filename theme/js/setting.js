let Select = require('uxcore-select2');
let Option = Select.Option;
let themeList = ['kuma', 'blue', 'payroll'];
let $themeLink = $('#J_ThemeStyle');
function onSelectTheme(value){
	setTheme(value);
	if (Modernizr.localstorage) {
		localStorage.setItem('theme', value);
	}
}
function setTheme(theme){
	$themeLink.attr('href', `/static/style/${theme}.css`);
}
ReactDOM.render(
	<Select defaultValue={window.theme} style={{width: 200}} onSelect={onSelectTheme}>
		{themeList.map((theme) => {
			return <Option key={theme} value={theme}>{theme}</Option>
		})}
	</Select>,
$('#J_ThemeSelector')[0]);
