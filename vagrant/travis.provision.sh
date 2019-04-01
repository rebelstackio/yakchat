#!/bin/bash -e
travis_arg=$1
set -a
LOG=${LOG:-/home/vagrant/yakchat/vagrant/tmp/log/boot.log}
t_pull_request=${travis_arg:-"$TRAVIS_PULL_REQUEST"}
set +a


# echo "Create AWS Credentials file..."

# sudo mkdir ~/.aws
# cat <<EOF > ~/.aws/credentials
# aws_access_key_id = $AWS_ACCESS_KEY_ID
# aws_secret_access_key = $AWS_SECRET_ACCESS_KEY
# EOF
# echo " AWS Credentials created"
# echo "TRAVIS_PULL_REQUEST---------->$TRAVIS_PULL_REQUEST"
# echo "AWS_ACCESS_KEY_ID-------->$AWS_ACCESS_KEY_ID"
# echo "AWS_SECRET_ACCESS_KEY-------->$AWS_SECRET_ACCESS_KEY"

echo "Installing Python and PIP"

# sudo apt-get -y install software-properties-common
# sudo add-apt-repository ppa:deadsnakes/ppa
# sudo apt-get update
# sudo apt-get -y install python3.6
# sudo apt-get -y install python3-pip
# pip3 install awscli --upgrade --user

echo "Create a new S3 bucket"

aws s3api create-bucket --bucket "yakchat_$TRAVIS_PULL_REQUEST" --acl public read --region eu-west-1

