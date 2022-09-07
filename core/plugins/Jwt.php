<?php

namespace C\P;

class Jwt
{
    private $alg = 'sha256';
    private $secret = "6529006xywd";  
    private $exp = 0;  
    public function __construct($secret,$exp)
    {
        $this->secret = $secret;
        $this->expected = $exp;
    }
    /**
     * alg属性表示签名的算法；typ属性表示这个令牌的类型
     */
    public function getHeader()
    {
        $header = [
            'Alg' => $this->alg,
            'Typ' => 'JWT'
        ];
 
        return $this->base64urlEncode(json_encode($header, JSON_UNESCAPED_UNICODE));
    }
 
    /**
     * Payload 部分也是一个 JSON 对象，用来存放实际需要传递的数据。JWT 规定了7个官方字段，供选用，这里可以存放私有信息，比如uid
     * @param $uid int 用户id
     * @return mixed
     */
    public function getPayLoad($uid)
    {
        $payLoad = [
            'iss' => 'admin',       //签发人
            'exp' => time() + 60*60*7*24,  //过期时间
            'sub' => 'test',        //JWT所面向的用户
            'aud' => 'test1',       //接收该JWT的一方
            'iat' => time(),        //签发时间
            'data' => $uid,          //私有信息，uid
        ];
        return $this->base64urlEncode(json_encode($payLoad, JSON_UNESCAPED_UNICODE));
    }
 
    /**
     * 生成token,假设现在payload里面只存一个uid
     * @param $uid int
     * @return string
     */
    public function genToken($uid)
    {
        $header  = $this->getHeader();
        $payLoad = $this->getPayLoad($uid);
        $raw   = $header . '.' . $payLoad;
        $token = $raw . '.' . hash_hmac($this->alg, $raw, $this->secret);
        return $token;
    }
 
 
    /**
     * 解密校验token,成功的话返回uid
     * @param $token
     * @return mixed
     */
    public function verifyToken($token)
    {
        if (!$token) {
            return false;
        }
        $tokenArr = explode('.', $token);
        if (count($tokenArr) != 3) {
            return false;
        }
        $header    = $tokenArr[0];
        $payLoad   = $tokenArr[1];
        $signature = $tokenArr[2];

        $payloadArr = json_decode($this->base64urlDecode($payLoad), true);
        

        if (!$payloadArr) {
            return false;
        }
    
        //已过期
        if (isset($payloadArr['exp']) && $payloadArr['exp'] < time()) {
            return false;
        }

        $expected = hash_hmac($this->alg, $header . '.' . $payLoad, $this->secret);
 
        //签名不对
        if ($expected !== $signature) {
            return false;
        }
 
        return $payloadArr['data'];
    }
 
    /**
     * 安全的base64 url编码
     * @param $data
     * @return string
     */
    private function base64urlEncode($data)
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }
 
    /**
     * 安全的base64 url解码
     * @param $data
     * @return bool|string
     */
    private function base64urlDecode($data)
    {    
        return base64_decode(str_pad(strtr($data, '-_', '+/'), strlen($data), '=', STR_PAD_RIGHT));
    }
}