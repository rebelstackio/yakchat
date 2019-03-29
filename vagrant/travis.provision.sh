#!/bin/bash -e
travis_arg=$1
set -a
LOG=${LOG:-/home/vagrant/yakchat/vagrant/tmp/log/boot.log}
t_pull_request=${travis_arg:-"$TRAVIS_PULL_REQUEST"}
set +a

# pull request number to create the bucket
# echo "Create AWS Credentials file..."

# sudo mkdir ~/.aws

# cat <<EOF > ~/.aws/credentials
# aws_access_key_id = $AWS_ACCESS_KEY_ID
# aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
# EOF


# echo " AWS Credentials created"

echo "TRAVIS_PULL_REQUEST---------->$TRAVIS_PULL_REQUEST"
echo "AWS_ACCESS_KEY_ID-------->$AWS_ACCESS_KEY_ID"
echo "AWS_SECRET_ACCESS_KEY-------->$AWS_SECRET_ACCESS_KEY"
