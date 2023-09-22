
#protoc --js_out=import_style=commonjs,binary:./ --grpc_out=./ --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` wallet.proto

# PROTOC_OUT_DIR="../"
# #npm i -g grpc-toolscd src/proto/v1
# mkdir -p ${PROTOC_OUT_DIR}
# protoc \
#        --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#        --js_out="import_style=commonjs,binary:${PROTOC_OUT_DIR}" \
#        --grpc_out="${PROTOC_OUT_DIR}" \
#        *.proto
# protoc \
#        --plugin=protoc-gen-ts=../../../node_modules/.bin/protoc-gen-ts \
#        --ts_out="${PROTOC_OUT_DIR}" \
#        *.proto
mkdir -p ./src/proto/generated

pnpm grpc_tools_node_protoc \
       --ts_out=./src/proto/generated \
       --js_out=import_style=commonjs,binary:./src/proto/generated \
       --grpc_out=./src/proto/generated \
       --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
       ./src/proto/v1/*.proto

mv src/proto/generated/src/proto/v1 src/proto/generated
rm -rf src/proto/generated/src
