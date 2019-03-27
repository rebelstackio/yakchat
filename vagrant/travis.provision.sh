#!/bin/bash -e
travis_arg=$1
set -a
LOG=${LOG:-/home/vagrant/yakchat/vagrant/tmp/log/boot.log}
t_pull_request=${travis_arg:-"$TRAVIS_PULL_REQUEST"}
set +a

# pull request number to create the bucket
echo $t_pull_request

