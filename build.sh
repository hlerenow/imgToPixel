#!/usr/bin/env bash
usage() {
    echo "
    使用方法:   ./build.sh -P=build|install
    参数说明:   -P: 编译环境
    例:        ./build.sh -P=build
    "
}
for ((i=1;i<=$#;i++))
do
    eval str=\${$i}
    case $str in
        -P*)
            profile=`echo $str|cut -d'=' -f 2`
            ;;
        *)
            usage
            exit 1
            ;;
    esac
done
# 设置node版本，对打包服务器
export PATH=/usr/local/n/versions/node/8.9.1/bin:$PATH;
echo "打包环境为: $profile"

echo "node版本是: `node -v`"
# 安装NPM包
install() {
     echo "安装NPM包..."
    # 只安装dependencies
    npm install --registry http://npmrepo.corp.qunar.com
    echo "NPM包安装完成"
}

if [ "install" == "$profile" ]; then
   install
   exit 0
fi

if [ "build" == "$profile" ]; then
    npm run prepublish
else
    echo  "不识别的打包环境 $profile"
    usage
    exit 1
fi
echo "$profile 构建完成"
