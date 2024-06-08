VERSION=1.0.1
FOLDER_NAME=monitoring_gui
SYSTEM_HOST_IP=4.234.149.79
REVISION_HASH=$(git rev-parse --short HEAD)

FORMATTED_VERSION=$(echo "$VERSION" | tr '.' '_')
ARCHIVE_NAME="${FOLDER_NAME}_${FORMATTED_VERSION}.zip"
rm -rf $FOLDER_NAME
monitoring_rev=$(git --git-dir=../.git rev-parse --short HEAD)
monitoring_rev_msg="monitoring-rev=$monitoring_rev"
ssh -i ~/poc-orchestrator-vm_key.pem azureuser@$SYSTEM_HOST_IP 'mkdir /datadrive/k3s-storage/build/'${FOLDER_NAME}'/'${VERSION}'/'
npm run build &&
echo "$monitoring_rev_msg" >> ../dist/git-revisions.txt &&
zip -r $ARCHIVE_NAME ../dist/ &&
scp -i ~/poc-orchestrator-vm_key.pem $ARCHIVE_NAME azureuser@$SYSTEM_HOST_IP:/datadrive/k3s-storage/build/$FOLDER_NAME/$VERSION/
echo $monitoring_rev_msg
