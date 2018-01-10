import os
import re

with open('1.txt', 'r') as f:
	file = f.read()
	res = re.sub(r'{% snippet "\d+" safe=true %}', '', file)
	res_finally = re.sub(r'{% endsnippet %}', '', res)
	with open('2.txt', 'w') as g:
		g.write(res_finally)