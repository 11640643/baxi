#!/usr/bin/python
#coding=utf-8

import sys,os,time,datetime,zipfile,shutil
from optparse import OptionParser

now = datetime.date.today()
current_date = now.isoformat()
current_time = 0

find_path = os.getcwd()

options = OptionParser(usage='%prog [options] [path]', description='search each folders on the given time')
options.add_option('-t', '--time', type='string', default=current_date, help='base datetime')
options.add_option('-o', '--output', type='string', default='', help='output path')

output_path = ''

file_list = []

def get_files(path):
	global current_time, file_list, output_path
	if os.path.exists(path) and os.path.isdir(path):
		_file_list = os.listdir(path)
		for _name in _file_list:
			_new_name = os.path.join(path, _name)
			if os.path.isdir(_new_name):
				if os.path.abspath(_new_name) == os.path.abspath(output_path):
					continue
				else:
					get_files(_new_name)
			elif os.path.isfile(_new_name):
				_stat = os.stat(_new_name)
				if _stat[os.path.stat.ST_MTIME] >= current_time:
					file_list.append(_new_name)

try:
	opts, args = options.parse_args()

	if len(args)>0 and args[0]:
		find_path = args[0]

	find_path = os.path.abspath(find_path)
	if os.path.exists(find_path) and os.path.isdir(find_path):
		current_time = time.mktime(time.strptime(opts.time, '%Y-%m-%d'))
		if opts.output == '':
			output_path = os.path.join(find_path, ('newfiles-%s' % opts.time.replace('-','')))

		print 'Start...'
		sys.stdout.flush()

		get_files(find_path)
		if os.path.exists(output_path) == False:
			os.mkdir(output_path)
		elif os.path.isdir(output_path) == False:
			print 'Output must be folder'
			sys.exit()

		for name in file_list:
			_new_path = name.replace(find_path, output_path)
			if os.path.exists(_new_path):
				os.remove(_new_path)

			_path = os.path.dirname(_new_path)
			if os.path.exists(_path) == False:
				os.makedirs(_path)

			shutil.copy(name, _new_path)

		print 'Done, new folder is %s' % output_path
	else:
		print 'Path is not exists.'
except Exception, e:
	print 'Error: ',e
	print 'Try `newfiles.py -h` for more information.'
