#!/bin/bash -e
travis_arg=$1
set -a
LOG=${LOG:-/home/vagrant/yakchat/vagrant/tmp/log/boot.log}
VAGRANT_PROVISION=${VAGRANT_PROVISION:-0}
datestamp=$(date +%s)
t_pull_request=${travis_arg:-"vagrant-${datestamp}"}
NODE_VER=${NODE_VER:-10.x}
policy_file=/tmp/policy.json
build_dir=dist/
set +a

if [[ $VAGRANT_PROVISION -eq 1 ]]; then

  echo "..........Get node version.........."
  curl -sL "https://deb.nodesource.com/setup_$NODE_VER" | sudo -E bash -

  echo "..........Create AWS Credentials file.........."
  sudo mkdir -p /home/vagrant/.aws
  cat > /home/vagrant/.aws/credentials << EOL
[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
EOL

  echo "..........Installing Python and PIP.........."
  sudo apt-get update
  sudo apt-get install -y nodejs
  sudo apt-get install -y python-pip
  pip install awscli
  PATH=$HOME/.local/bin:$PATH

  echo "..........Building application.........."

  cd /home/vagrant/yakchat
  npm install 
  npm run build

  echo "..........Set build directory.........."
  build_dir=/home/vagrant/yakchat/dist
fi

echo "..........Creating Pull Request Deploy.........."
echo "..........Create a new S3 bucket.........."

aws s3 mb s3://"yakchat-$t_pull_request" --region us-west-1

echo "..........Copy release into the bucket.........."
aws s3 sync $build_dir s3://"yakchat-$t_pull_request/"

echo "..........Creating the policy file.........."
cat > $policy_file <<- EOM
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadGetObject",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::yakchat-$t_pull_request/*"
      ]
    }
  ]
}
EOM

echo "..........Set policy to the bucket.........."
aws s3api put-bucket-policy --bucket "yakchat-$t_pull_request" --policy file://$policy_file

echo "..........Making the bucket a host for static websites.........."
aws s3 website s3://"yakchat-$t_pull_request/" --index-document index.html

echo "..........DONE!!!.........."


